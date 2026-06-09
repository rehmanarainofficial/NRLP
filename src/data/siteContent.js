export const topLinks = [
  'Home',
  'Trade Enquiries',
  'Urdu Version',
  'Site Map',
  'Contact Us',
]

export const companyIdentity = {
  name: 'National Refinery Limited',
  registration: 'New CUIN Registration number 0001747',
  ntn: 'NTN-No 0711325-7',
}

export const navigation = [
  {
    label: 'Corporate',
    children: [
      {
        label: 'Profile',
        children: [
          'Introduction',
          'Vision',
          'Mission',
          'Detail of Associate',
          'License',
          'Production & Capacity',
          'Corporate Structure',
          'Future Plans',
          'NRL At A Glance',
          'Company Information',
          'Performance',
          'Land Marks',
          'Management',
          'Corporate Objectives',
          'Projects',
          'Contact List',
        ],
      },
    ],
  },
  {
    label: 'Policies',
    children: [
      { label: 'HSE', children: ['HSE Policies', 'Report & News Letters'] },
      {
        label: 'Ethics',
        children: [
          'Core Values / Code of Conduct',
          "Investors' Relationship & Communication Policy",
          'Whistle Blowing Policy Statement',
          'Gender Diversity Policy',
        ],
      },
      { label: 'TOR', children: ['Board Audit Committee', 'HR Committee'] },
    ],
  },
  {
    label: 'Investor Relation',
    children: ['Investor Complaints', 'Corporate Social Responsibility', 'Notices & Declarations'],
  },
  { label: 'Commercial & HR', children: ['Key Supplier & Customer'] },
  {
    label: 'Products',
    children: ['Fuel Products', 'Lube Base Oils', 'Asphalt', 'Speciality Products', 'HR'],
  },
  {
    label: 'Production',
    children: ['Keamari Terminal', 'Lube Refinery', 'Fuel Refinery', 'BTX Plant', 'Utilities', 'Quality Control'],
  },
  {
    label: 'Governance',
    children: ['Board of Directors', 'Pattern of Shareholding', 'Auditors', 'Legal Advisors Name'],
  },
  {
    label: 'Media',
    children: ["Awards & Recognition", "NRL's Memberships", 'Website Compliance Certificate', 'Last Update'],
  },
  {
    label: 'Election of Directors',
    children: ['Proxies', 'Profile of Candidates', 'List of Shareholders', 'Proxy Form'],
  },
  {
    label: 'Investor Information',
    children: [
      'Financial Reports',
      'Financial Highlights',
      "Shareholder's Information",
      'Share Registrar',
      'Shares of Company',
      'Rating of Company',
      'Corporate Briefing Session',
      'Gender Pay Gap Statement',
    ],
  },
  {
    label: 'Postal Ballot',
    children: ['E Voting', 'Voting Through Ballot Paper', 'Result of Poll'],
  },
]

export const hero = {
  eyebrow: 'National Refinery Limited Pakistan',
  title: "Powering Pakistan's Energy Future",
  subtitle:
    "National Refinery Limited is a key player in Pakistan's petroleum refining sector, delivering fuel, lube base oils, asphalt, and speciality products with a commitment to safety, performance, and sustainable growth.",
  video: '/videos/refinery-bg.mp4',
  buttons: [
    { label: 'Explore Company', href: '#about', variant: 'primary' },
    { label: 'Investor Information', href: '#investors', variant: 'secondary' },
  ],
  stats: [
    { value: 'Years', label: 'Years of Excellence' },
    { value: 'NRL', label: 'Refining Expertise' },
    { value: '24/7', label: 'Industrial Capacity' },
    { value: 'SECP', label: 'Corporate Governance' },
  ],
}

export const about = {
  title: 'About National Refinery Limited',
  eyebrow: 'Corporate overview',
  body: 'National Refinery Limited is one of Pakistan’s leading petroleum refining companies, serving the country through fuel products, lube base oils, asphalt, speciality products, and industrial production facilities. The organization focuses on operational excellence, corporate governance, safety, environmental responsibility, and long-term value creation.',
  cards: [
    {
      icon: 'Building2',
      title: 'Corporate Profile',
      description: 'A trusted refining organization serving national energy needs with disciplined operations.',
    },
    {
      icon: 'Compass',
      title: 'Vision & Mission',
      description: 'Focused on responsible growth, reliability, and long-term industrial value creation.',
    },
    {
      icon: 'Gauge',
      title: 'Production Capacity',
      description: 'Integrated refining assets supporting fuels, lube base oils, asphalt, and specialties.',
    },
    {
      icon: 'TrendingUp',
      title: 'Future Plans',
      description: 'Continuous modernization that strengthens safety, performance, and market resilience.',
    },
  ],
}

export const products = {
  title: 'Our Core Products',
  eyebrow: 'Products',
  description: 'A diversified petroleum portfolio supporting industrial, transport, infrastructure, and commercial markets.',
  cards: [
    {
      icon: 'Fuel',
      title: 'Fuel Products',
      description: 'High-value refinery streams supporting mobility, logistics, and national supply reliability.',
      imageTone: 'from-sky-400/30 via-cyan-200/10 to-slate-950',
    },
    {
      icon: 'Droplets',
      title: 'Lube Base Oils',
      description: 'Base oil production for lubricants used across machinery, mobility, and industry.',
      imageTone: 'from-amber-300/30 via-stone-200/10 to-slate-950',
    },
    {
      icon: 'Road',
      title: 'Asphalt',
      description: 'Infrastructure-grade asphalt products for roads, construction, and national development.',
      imageTone: 'from-zinc-300/25 via-slate-400/10 to-neutral-950',
    },
    {
      icon: 'FlaskConical',
      title: 'Speciality Products',
      description: 'Specialized refinery outputs supporting technical, commercial, and industrial applications.',
      imageTone: 'from-blue-300/25 via-emerald-200/10 to-slate-950',
    },
  ],
}

export const production = {
  title: 'Production & Refinery Operations',
  eyebrow: 'Operations',
  description: 'Production areas are coordinated for reliability, quality assurance, and safe continuous operations.',
  areas: [
    { icon: 'Ship', title: 'Keamari Terminal', description: 'Terminal handling and logistics for refinery movement.' },
    { icon: 'Factory', title: 'Lube Refinery', description: 'Processing streams dedicated to lube base oil production.' },
    { icon: 'Flame', title: 'Fuel Refinery', description: 'Core fuel refining operations for national energy supply.' },
    { icon: 'Atom', title: 'BTX Plant', description: 'Specialized processing for aromatics and related products.' },
    { icon: 'Zap', title: 'Utilities', description: 'Critical utility systems supporting plant performance.' },
    { icon: 'ShieldCheck', title: 'Quality Control', description: 'Testing and assurance for product consistency.' },
  ],
}

export const policies = {
  title: 'Policies, HSE & Ethics',
  eyebrow: 'Responsibility',
  description: 'NRL places safety, governance, ethical conduct, and environmental accountability at the center of operations.',
  items: ['HSE Policies', 'Code of Conduct', 'Whistle Blowing Policy', 'Gender Diversity Policy'],
}

export const investors = {
  title: 'Investor Relations',
  eyebrow: 'Shareholder value',
  description: 'Transparent investor communication, financial reporting, declarations, notices, and shareholder services.',
  highlights: ['Financial Reports', 'Financial Highlights', 'Share Registrar', 'Corporate Briefing Session'],
}

export const governance = {
  title: 'Governance & Leadership',
  eyebrow: 'Corporate governance',
  description: 'Board oversight, committees, auditors, legal advisors, and policy frameworks support accountable leadership.',
  items: ['Board of Directors', 'Pattern of Shareholding', 'Auditors', 'Legal Advisors'],
}

export const media = {
  title: 'Media & Corporate Updates',
  eyebrow: 'Newsroom',
  description: 'Awards, memberships, compliance certificates, and official company updates in one place.',
  cards: [
    { title: 'Awards & Recognition', description: 'Milestones that reflect operational discipline and corporate progress.' },
    { title: "NRL's Memberships", description: 'Industry affiliations and memberships across the energy ecosystem.' },
    { title: 'Website Compliance Certificate', description: 'Regulatory website compliance and disclosure documentation.' },
  ],
}

export const cta = {
  title: 'Explore NRL’s corporate and investor information',
  description: 'Access company details, product information, policies, governance resources, and investor disclosures.',
  primary: 'View Investor Information',
  secondary: 'Contact NRL',
}

export const footer = {
  summary:
    'National Refinery Limited is committed to operational excellence, industrial reliability, and responsible energy production for Pakistan.',
  contact: {
    address: '7-B, Korangi Industrial Area, Karachi-74900, Pakistan.',
    phones: ['+92-21-35064981-85', '+92-21-35064977-79', '+92-21-35064135-37'],
    fax: '+92-21-35054663',
    email: 'info@nrlpak.com',
  },
  columns: [
    { title: 'Company', links: ['Profile', 'Vision', 'Mission', 'Management'] },
    { title: 'Products', links: ['Fuel Products', 'Lube Base Oils', 'Asphalt', 'Speciality Products'] },
    { title: 'Investors', links: ['Financial Reports', 'Shareholder Information', 'Notices', 'Complaints'] },
    { title: 'Governance', links: ['Board of Directors', 'Auditors', 'Policies', 'Compliance'] },
  ],
}
