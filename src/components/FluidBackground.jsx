import { useEffect, useRef } from 'react'

// Full-screen WebGL2 "liquid metal" background: two noise fields drift in
// opposite directions, are blended with a smooth-min, and only a thin band
// around one contour is lit — giving slowly flowing glowing rim lines.
// The cursor carves a soft dark hole into the lines.

const VERT = `#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`

const FRAG = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseOn;
out vec4 outColor;

float hash21(vec2 p, float s) {
  p = fract(p * vec2(123.34, 456.21) + s * 17.17);
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p, float s) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i, s);
  float b = hash21(i + vec2(1.0, 0.0), s);
  float c = hash21(i + vec2(0.0, 1.0), s);
  float d = hash21(i + vec2(1.0, 1.0), s);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float layered(vec2 p, float s) {
  float h = 0.5 * s;
  return (2.0 * noise(p, s) + 1.5 * noise(p + h, s + 0.1)
        + 1.25 * noise(p - h, s + 0.2) + noise(p + vec2(h, -h), s + 0.3)) / 5.75;
}

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 p = frag / uRes.y * 14.0;          // feature size
  float t = uTime * 0.09;                  // slow drift
  vec2 dir = vec2(0.0, -1.0);              // flow downwards
  vec2 side = vec2(1.0, 0.0);

  float w1 = noise(p * 0.6 + side * t, 3.0) * 1.2;
  float w2 = noise(p * 0.3 - side * t, 7.0) * 2.2;

  float a = layered(p + w1 + dir * t * 0.6, 1.0);
  float b = layered(p * 0.95 + w2 - dir * t * 0.6, 2.0);
  float m = smin(a, b, 0.2);

  float band = (0.2 - abs((m - 0.4) * 2.0)) * 5.0;
  float lit = clamp(band - noise(p + dir * t, 9.0) * 0.5, 0.0, 1.0);
  lit = pow(lit, 2.0);

  if (uMouseOn > 0.5) {
    float d = length((frag - uMouse) / uRes.y);
    lit *= clamp(1.0 - exp(-d * d / 0.09) * 0.5, 0.0, 1.0);
  }

  float shade = clamp(0.5 + (a - b) * 0.8, 0.0, 1.0);
  // Cloud9 brand: indigo #2d388d (lifted) -> cyan #00adef -> ice highlights
  vec3 indigo = vec3(0.36, 0.44, 1.0);
  vec3 sky = vec3(0.0, 0.678, 0.937);
  vec3 ice = vec3(0.84, 0.91, 0.97);
  vec3 col = mix(mix(indigo, sky, shade), ice, pow(lit, 3.0) * 0.5) * lit;
  float alpha = max(col.r, max(col.g, col.b)) * 0.32;
  outColor = vec4(col * 0.32, alpha);
}`

function compile(gl, type, src) {
  const sh = gl.createShader(type)
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh))
    return null
  }
  return sh
}

export default function FluidBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl2', { premultipliedAlpha: true, antialias: false })
    if (!gl) return

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return
    const prog = gl.createProgram()
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'aPos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'uRes')
    const uTime = gl.getUniformLocation(prog, 'uTime')
    const uMouse = gl.getUniformLocation(prog, 'uMouse')
    const uMouseOn = gl.getUniformLocation(prog, 'uMouseOn')

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const resize = () => {
      canvas.width = Math.floor(canvas.clientWidth * dpr)
      canvas.height = Math.floor(canvas.clientHeight * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    const target = [-9999, -9999]
    const mouse = [-9999, -9999]
    let mouseOn = 0
    const onMove = (e) => {
      target[0] = e.clientX * dpr
      target[1] = (window.innerHeight - e.clientY) * dpr
      if (!mouseOn) { mouse[0] = target[0]; mouse[1] = target[1] }
      mouseOn = 1
    }
    window.addEventListener('pointermove', onMove)

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf
    let last = performance.now()
    const start = last
    const frame = (now) => {
      const dt = (now - last) / 1000
      last = now
      const k = 1 - Math.exp(-dt / 0.15) // eased cursor follow
      mouse[0] += (target[0] - mouse[0]) * k
      mouse[1] += (target[1] - mouse[1]) * k
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, reduce ? 0 : (now - start) / 1000)
      gl.uniform2f(uMouse, mouse[0], mouse[1])
      gl.uniform1f(uMouseOn, mouseOn)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      gl.deleteProgram(prog)
      gl.deleteBuffer(buf)
    }
  }, [])

  return (
    <>
      <div className="bg-layer bg-fluid" aria-hidden="true">
        <canvas ref={canvasRef} />
      </div>
      <div className="bg-layer bg-aurora" aria-hidden="true" />
      <div className="bg-layer bg-grid" aria-hidden="true" />
    </>
  )
}
