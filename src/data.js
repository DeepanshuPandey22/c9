import { Network, ShieldCheck, Mail, Globe, Cloud, Code2 } from 'lucide-react'

export const company = {
  name: 'Cloud9',
  suffix: 'Consultancy',
  tagline: 'Expertly providing IT & Design Services you can trust',
  intro:
    'Cloud9 Consultancy provides high quality, end-to-end IT infrastructure, Design, and Application Development solutions to cost-effectively manage IT operations efficiently.',
  email: 'contactus@cloud9consultancy.com',
  phones: ['+91 9 821 450 882', '+1 (804) 631 3653'],
  address: ['Office – UG004, F Block, East Platinum Tower', 'Sector 44, Noida', 'Pin Code – 201301'],
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com',
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Who We Are' },
  { to: '/services', label: 'Our Services' },
  { to: '/clients', label: 'Our Clients' },
  { to: '/contact', label: 'Contact Us' },
]

export const services = [
  {
    slug: 'network',
    icon: Network,
    tag: 'Network',
    title: 'Network Services',
    short: 'Complete end to end network services provided by experts.',
    lead: 'Complete end to end network services provided by Experts',
    image: '/img/NetworkServices.jpg',
    items: [
      'Implementation, Configuration and Troubleshooting',
      'Internal Network and Perimeter Security',
      'Heat Maps for Wireless Access Points (WAP)',
      'Remote Managed Support',
      'Annual Maintenance Contract (AMC)',
      'Consultancy on Existing and New Network',
      'Documentation and Knowledge Transfer (KT)',
    ],
  },
  {
    slug: 'security',
    icon: ShieldCheck,
    tag: 'Security',
    title: 'Security Services',
    short: 'Complete security of your infrastructure, network and email.',
    lead: 'Complete Security of your Infrastructure, Network, Email by Experts',
    image: '/img/SecurityServices.jpg',
    items: [
      'Implementation, Configuration of Security Devices',
      'Troubleshooting of Existing Issues',
      'Cloud Infrastructure (Azure) and O365',
      'Remote Managed Support',
      'End Point Protection',
      'Annual Maintenance Contract (AMC)',
      'Consultancy on Existing Security Configuration and Issues',
      'Consultancy on New Security Products',
      'Documentation and Knowledge Transfer (KT)',
    ],
  },
  {
    slug: 'cloud',
    icon: Cloud,
    tag: 'Cloud & Azure',
    title: 'Cloud Infrastructure Services',
    short: 'Azure tenants, environments, security and hybrid setups.',
    lead: 'Complete Configuration of Cloud Infrastructure by Experts',
    image: '/img/AzureServices.jpg',
    items: [
      'Configuration of new Azure Tenant',
      'Setup Test, Development and Production Environment',
      'Server Configuration as per the Application',
      'Configuration of Tenant Security',
      'Tenant Migration',
      'Remote Managed Support',
      'Hybrid Configuration (On Premise and Cloud)',
      'Annual Maintenance Contract (AMC)',
      'Documentation and Knowledge Transfer (KT)',
    ],
  },
  {
    slug: 'office365',
    icon: Mail,
    tag: 'Office 365',
    title: 'Office 365 Services',
    short: 'Email, Teams, SharePoint and ATP configured end to end.',
    lead: 'Complete O365 Portal Configuration by Experts',
    image: '/img/Office365Services.jpg',
    items: [
      'Setting up Email, Teams and SharePoint Services',
      'Configuration of Microsoft ATP Service',
      'Configuration of Security Alerts',
      'Configuration of Intranet and Extranet SharePoint Portals',
      'Configuration of Teams and Telephony Services',
      'Consultancy on Licenses based on Business Requirement',
      'Remote Managed Support',
      'Annual Maintenance Contract (AMC)',
      'Documentation and Knowledge Transfer (KT)',
    ],
  },
  {
    slug: 'website',
    icon: Globe,
    tag: 'Web',
    title: 'Website Services',
    short: 'Hosting, design, SSL and backups for your web presence.',
    lead: 'Complete Website Hosting, Designing, Security Services by Experts',
    image: '/img/WebsiteServices.jpg',
    items: [
      'Domain Registration',
      'Consultancy on Hosting and Security Services',
      'Configuration of SSL Certificates',
      'Website Designing',
      'Backup',
      'Remote Managed Support',
      'Annual Maintenance Contract (AMC)',
      'Documentation and Knowledge Transfer (KT)',
    ],
  },
  {
    slug: 'appdev',
    icon: Code2,
    tag: 'Development',
    title: 'Application Development',
    short: 'Web, mobile, desktop and cloud applications built to fit.',
    lead: 'Complete Application Development by Experts',
    image: '/img/APPDevServices.jpg',
    items: [
      'Application Development (Web, Mobile, Desktop and Cloud)',
      'Consultancy on Existing In-House Developed Applications',
      'Remote Managed Support',
      'Annual Maintenance Contract (AMC)',
      'Documentation and Knowledge Transfer (KT)',
    ],
  },
]

export const values = [
  { title: 'Integrity', text: 'We take the responsibilities entrusted to us by our clients and IT professionals very seriously.' },
  { title: 'Reliability', text: 'Remote managed support and annual maintenance contracts keep your operations running.' },
  { title: 'Quality', text: 'High quality, end-to-end solutions that cost-effectively manage IT operations.' },
  { title: 'Knowledge Transfer', text: 'Every engagement ends with documentation and KT, so your team stays in control.' },
]

export const about = {
  paragraphs: [
    'Cloud9 Consultancy provides high quality, end-to-end IT infrastructure, Design and Application Development solutions to cost-effectively manage IT operations efficiently. With extensive experience in managing complex IT implementation projects and integration of emerging technologies in a dynamic environment.',
    'The purpose of our business operations is that we build relationships to last. We do this by placing the highest priority on our core values of integrity, reliability, and quality. We take the responsibilities entrusted to us by our clients and IT professionals very seriously.',
  ],
  mission:
    'Our mission is to provide IT Consultancy services that help clients to achieve the most optimum performance in their Business Operations.',
  vision:
    'Our vision is to be a leading IT Consulting firm operating worldwide. Our success is measured by the services we deliver to our clients, the quality of the staff we employ. They guide our decision making, our interactions with our clients and our relationships with each other.',
}

export const clients = [
  { name: 'Ibda Studios', logo: '/clients/IbdaStudios.jpg' },
  { name: 'Flex', logo: '/clients/Flex.jpg' },
  { name: 'Morganti', logo: '/clients/Morganti.jpg' },
  { name: 'DCT', logo: '/clients/dct-logo.jpg' },
  { name: 'Digilab', logo: '/clients/Digilab.jpg' },
  { name: 'Ellure', logo: '/clients/ellure.jpg' },
  { name: 'Emirates Shamwal', logo: '/clients/Emirates-Shamwal.jpg' },
  { name: 'SafetyWings', logo: '/clients/Safetywings.jpg' },
]
