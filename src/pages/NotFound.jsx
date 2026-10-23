import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Error 404" title="This page drifted off the grid" intro="The page you're looking for doesn't exist or has moved." />
      <section className="container" style={{ paddingBottom: 120 }}>
        <Reveal>
          <Link to="/" className="btn btn-primary sheen">Back to Home <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </>
  )
}
