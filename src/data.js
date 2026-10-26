import {
  Server, Cloud, ShieldCheck, Network, Globe, Megaphone, BarChart3, Code2, Bot,
  GraduationCap, Boxes, Lock,
} from 'lucide-react'

export const company = {
  name: 'Cloud9',
  suffix: 'Consultancy',
  headline: 'Making Businesses Better Through Technology',
  tagline: 'Expertly providing IT & Design Services you can trust',
  intro:
    'Cloud9 Consultancy provides high quality, end-to-end IT infrastructure, Design and Application Development solutions to cost-effectively manage IT operations efficiently.',
  email: 'contactus@cloud9consultancy.com',
  social: '@Cloud9Consultancy',
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com/cloud9consultancy/',
  offices: [
    {
      label: 'Head Office — India',
      lines: ['Office – UG004, F Block', 'East Platinum Tower', 'Sector 44, Noida', 'Pin Code – 201301'],
      phone: '+91 9 821 450 882',
      map: 'East+Platinum+Tower+Sector+44+Noida+201301',
    },
    {
      label: 'Branch Office — USA',
      lines: ['2219 Cavalry Blvd', 'Jacksonville', 'Florida, 32246, USA'],
      phone: '+1 804 631 3653',
      map: '2219+Cavalry+Blvd+Jacksonville+FL+32246',
    },
  ],
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Who We Are' },
  { to: '/services', label: 'Our Services' },
  { to: '/clients', label: 'Our Clients' },
  { to: '/contact', label: 'Contact Us' },
]

// "General Services" overview from the 2025 company profile.
export const generalServices = [
  'Server and Desktop Support',
  'Cloud Services',
  'Cybersecurity',
  'Network Security',
  'Email Security',
  'Information Technology Consultancy',
  'GAP Analysis',
  'Remote Support',
  'Annual Maintenance Contract (AMC)',
  'Digital Transformation',
  'Managed Services',
]

export const partners = [
  { name: 'Amazon Web Services', short: 'AWS', logo: '/partners/aws.png', note: 'AWS Partner Network' },
  { name: 'Microsoft', short: 'Microsoft', logo: '/partners/microsoft.png', note: 'Microsoft Partner' },
  { name: 'Google Cloud', short: 'Google Cloud', logo: '/partners/google-cloud.png', note: 'Google Cloud Partner' },
  { name: 'Trellix', short: 'Trellix', logo: null, note: 'Security Partner' },
]

// Groups used for filtering on the Services page.
export const serviceGroups = ['All', 'Cloud & Licensing', 'Security & Network', 'Digital & Data', 'Support & Training']

export const services = [
  {
    slug: 'microsoft',
    icon: Boxes,
    group: 'Cloud & Licensing',
    tag: 'Microsoft',
    title: 'Microsoft Services',
    short: 'Azure, Office 365, Intune, Active Directory, SharePoint and Teams.',
    lead: 'Licensing, setup, migration and administration across the Microsoft stack',
    image: '/img/Office365Services.jpg',
    featured: true,
    items: [
      'Server and PC (Desktop/Laptop) Support',
      'New Tenant/Infrastructure Setup (Azure and O365)',
      'Tenant to Tenant Migration',
      'Active Directory Federation Service (ADFS)',
      'Intune – MDM, Conditional Access',
      'Azure Information Protection',
      'AADConnect Configuration with Azure Active Directory',
      'Consultancy Service on Existing Setup',
      'Installation, Configuration and Hardening of OS',
      'Active Directory and Group Policy Management',
      'SQL Server Cluster Configuration and Management',
      'SharePoint – Administration, Site Configuration and Development',
      'Teams – Voice, Audio Conferencing, Phone System',
      'Backup and Restore of Data',
    ],
  },
  {
    slug: 'aws',
    icon: Cloud,
    group: 'Cloud & Licensing',
    tag: 'AWS',
    title: 'AWS Services',
    short: 'Networking and delivery on Amazon Web Services.',
    lead: 'Design and configuration of secure, fast AWS network infrastructure',
    image: '/img/AzureServices.jpg',
    featured: true,
    items: [
      'Amazon VPC',
      'Elastic Load Balancing',
      'Amazon Route 53',
      'Amazon CloudFront',
      'AWS Direct Connect',
      'AWS VPN',
      'AWS Transit Gateway',
      'AWS Global Accelerator',
    ],
  },
  {
    slug: 'gcp',
    icon: Cloud,
    group: 'Cloud & Licensing',
    tag: 'Google Cloud',
    title: 'GCP Services',
    short: 'Compute, Kubernetes, storage and analytics on Google Cloud.',
    lead: 'Workloads, data and containers running on Google Cloud Platform',
    items: [
      'Google Compute Engine (GCE)',
      'Cloud SQL for Google Cloud',
      'Google Kubernetes Engine (GKE)',
      'Google Cloud Storage',
      'Google Cloud Analytics',
    ],
  },
  {
    slug: 'trellix',
    icon: Lock,
    group: 'Cloud & Licensing',
    tag: 'Trellix',
    title: 'Trellix Services',
    short: 'Endpoint, data, network, email and cloud security from Trellix.',
    lead: 'Licensing and deployment of the Trellix security platform',
    items: [
      'Endpoint Security',
      'Data Security',
      'Network Security',
      'Threat Intelligence',
      'Email Security',
      'Cloud Security',
    ],
  },
  {
    slug: 'security',
    icon: ShieldCheck,
    group: 'Security & Network',
    tag: 'Security',
    title: 'Security Services',
    short: 'Endpoint protection, email security, VAPT and a managed SOC.',
    lead: 'Assess, protect and monitor your infrastructure, endpoints and email',
    image: '/img/SecurityServices.jpg',
    featured: true,
    items: [
      'Endpoint Protection',
      'Email – Mimecast Setup and Configuration of Policies',
      'Advanced Threat Protection (ATP) on O365',
      'Security Assessment',
      'VAPT and Pentest',
      'Managed Security Service – SOC',
    ],
  },
  {
    slug: 'network',
    icon: Network,
    group: 'Security & Network',
    tag: 'Network',
    title: 'Network Services',
    short: 'Switches, routers and firewalls from Cisco, Fortinet, Palo Alto and Juniper.',
    lead: 'Implementation and managed services for enterprise networks',
    image: '/img/NetworkServices.jpg',
    featured: true,
    items: [
      'Implementation and Configuration',
      'Managed Services',
      'Network Access Control Configuration',
      'Configuration of Switches, Routers and Firewalls (Cisco, Fortinet, Palo Alto, Juniper etc.)',
      'IOS Upgrade',
    ],
  },
  {
    slug: 'ai',
    icon: Bot,
    group: 'Digital & Data',
    tag: 'AI',
    title: 'Artificial Intelligence (AI) Systems',
    short: 'Production AI: agents, document pipelines and custom models.',
    lead: 'Cloud9 builds AI systems that run in production – agents, document pipelines and custom models wired into the client’s real systems',
    featured: true,
    items: [
      'AI Agents',
      'Document Processing Pipelines',
      'Custom Models',
      'Integration with Existing Business Systems',
    ],
  },
  {
    slug: 'data',
    icon: BarChart3,
    group: 'Digital & Data',
    tag: 'Data',
    title: 'Data Analysis & Reporting Services',
    short: 'Integration, SQL, reports and Power BI / Tableau dashboards.',
    lead: 'Turn business data into reports and dashboards your teams can act on',
    featured: true,
    items: [
      'Data Integration and Mapping using Microsoft Integration Services',
      'Writing Complex Queries',
      'Reports using Microsoft Reporting Services and Crystal Reports',
      'Dashboards using Power BI and Tableau',
      'SQL Database Management',
    ],
  },
  {
    slug: 'software',
    icon: Code2,
    group: 'Digital & Data',
    tag: 'Development',
    title: 'Software / Application Development',
    short: 'Web, mobile, desktop and cloud applications, plus support.',
    lead: 'Custom software built, maintained and supported by our developers',
    image: '/img/APPDevServices.jpg',
    items: [
      'Software/Application Development (Web, Mobile, Desktop, Cloud Applications)',
      'Software Consultancy',
      'Software Support',
    ],
  },
  {
    slug: 'website',
    icon: Globe,
    group: 'Digital & Data',
    tag: 'Web',
    title: 'Website Services',
    short: 'Domains, hosting, SSL, security and backups.',
    lead: 'Everything needed to get a secure website online and keep it there',
    image: '/img/WebsiteServices.jpg',
    items: [
      'Domain Registration',
      'Hosting Setup',
      'Website Setup, Security and Backup',
      'SSL Certificate',
    ],
  },
  {
    slug: 'marketing',
    icon: Megaphone,
    group: 'Digital & Data',
    tag: 'Marketing',
    title: 'Marketing Services',
    short: 'Branding, marketing and social media campaigns.',
    lead: 'Build your brand and reach the right audience',
    items: [
      'Branding Services',
      'Marketing Campaigns',
      'Social Media Campaigns',
    ],
  },
  {
    slug: 'general',
    icon: Server,
    group: 'Support & Training',
    tag: 'Managed IT',
    title: 'General & Managed Services',
    short: 'Server and desktop support, consultancy, AMC and managed IT.',
    lead: 'Day-to-day IT support and consultancy to keep your business running',
    items: generalServices,
  },
  {
    slug: 'training',
    icon: GraduationCap,
    group: 'Support & Training',
    tag: 'Training',
    title: 'Training',
    short: 'Microsoft Azure and Office 365 training (online classes).',
    lead: 'Upskill your team on the Microsoft cloud',
    items: ['Microsoft Azure (Online Classes Only)', 'Office 365 (Online Classes Only)'],
  },
]

export const values = [
  { title: 'Integrity', text: 'We take the responsibilities entrusted to us by our clients and IT professionals very seriously.' },
  { title: 'Reliability', text: 'Remote support, managed services and AMCs keep your operations running.' },
  { title: 'Quality', text: 'High quality, end-to-end solutions that cost-effectively manage IT operations.' },
  { title: 'Global Reach', text: 'Offices in India and the USA, with partnerships across Amazon, Microsoft, Google Cloud and Trellix.' },
]

export const about = {
  paragraphs: [
    'Cloud9 Consultancy provides high quality, end-to-end IT infrastructure, Design and Application Development solutions to cost-effectively manage IT operations efficiently. With extensive experience in managing complex IT implementation projects and integration of emerging technologies in a dynamic environment.',
    'The purpose of our business operations is to build relationships to last. We do this by placing the highest priority on our core values of integrity, reliability, and quality. We take the responsibilities entrusted to us by our clients and IT professionals very seriously.',
  ],
  mission:
    'Our mission is to provide IT Consultancy services that help clients to achieve the most optimum performance in their Business Operations.',
  vision:
    'Our vision is to be a leading IT Consulting firm operating worldwide. Our success is measured by the services we deliver to our clients, the quality of the staff we employ. They guide our decision making, our interactions with our clients and our relationships with each other.',
}

export const team = [
  { name: 'Khileshwar Kumar', role: 'Founder & CEO', photo: '/team/khileshwar-kumar.png' },
  { name: 'Nitin Patte', role: 'Business Development', photo: '/team/nitin-patte.png' },
  { name: 'Nikhil Paliwal', role: 'Global Client Strategist', photo: '/team/nikhil-paliwal.png' },
]

// Top clients from the 2025 profile first, then earlier clients from the old site.
export const clients = [
  { name: 'Digilab', logo: '/clients/Digilab.png', top: true },
  { name: 'Flex', logo: '/clients/Flex.png', top: true },
  { name: 'Capella Patisserie', logo: '/clients/Capella.png', top: true },
  { name: 'Morganti GCC', logo: '/clients/Morganti.png', top: true },
  { name: 'Data Center Technologies', logo: '/clients/DCT.png', top: true },
  { name: 'Kabrew Koffee', logo: '/clients/KabrewKoffee.png', top: true },
  { name: 'Mood Arrest', logo: null, top: true },
  { name: 'Safety Wings', logo: '/clients/Safetywings.jpg', top: true },
  { name: 'Ibda Studios', logo: '/clients/IbdaStudios.jpg' },
  { name: 'Ellure', logo: '/clients/ellure.jpg' },
  { name: 'Emirates Shamwal', logo: '/clients/Emirates-Shamwal.jpg' },
]

export const stats = [
  { n: '13', l: 'Service lines' },
  { n: '4', l: 'Technology partners' },
  { n: '2', l: 'Offices · India & USA' },
  { n: '11+', l: 'Clients served' },
]
