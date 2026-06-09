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
        ],
      },
      'NRL At A Glance',
      'Land Marks',
      'Management',
      'Corporate Objectives',
      'Projects',
      'Contact List',
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
    "National Refinery Limited is engaged in manufacturing, production, and sale of petroleum products through a refinery complex comprising two lube refineries and one fuel refinery.",
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
  body: 'National Refinery Limited (NRL) was incorporated on August 19, 1963, as a public limited company. The Government of Pakistan took over the management of NRL under the Economic Reforms Order, 1972, under the Ministry of Production, which was exercising control through its shareholding in State Petroleum Refining and Petrochemical Corporation (PERAC).',
  cards: [
    {
      icon: 'Building2',
      title: 'Introduction',
      description:
        'The management of the Company was taken over by the (Attock) Pharaon Group in Pakistan on July 7, 2005, from the Government of Pakistan.',
    },
    {
      icon: 'Compass',
      title: 'Vision',
      description:
        'Our passion is to attain distinctive leadership amongst the corporate success stories of tomorrow through professional competencies, value addition, human capital development, safety, occupational health, and environment.',
    },
    {
      icon: 'Gauge',
      title: 'Business Activities',
      description:
        'NRL is engaged in the manufacturing, production, and sale of a large range of petroleum products through three refineries.',
    },
    {
      icon: 'TrendingUp',
      title: 'Refinery Complex',
      description: 'The Company’s refinery complex comprises three refineries, consisting of two lube refineries and one fuel refinery.',
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
      image: '/images/products/fuel-products.png',
      imageTone: 'from-sky-400/30 via-cyan-200/10 to-slate-950',
    },
    {
      icon: 'Droplets',
      title: 'Lube Base Oils',
      description: 'Base oil production for lubricants used across machinery, mobility, and industry.',
      image: '/images/products/lube-base-oils.png',
      imageTone: 'from-amber-300/30 via-stone-200/10 to-slate-950',
    },
    {
      icon: 'Road',
      title: 'Asphalt',
      description: 'Infrastructure-grade asphalt products for roads, construction, and national development.',
      image: '/images/products/asphalt.png',
      imageTone: 'from-zinc-300/25 via-slate-400/10 to-neutral-950',
    },
    {
      icon: 'FlaskConical',
      title: 'Speciality Products',
      description: 'Specialized refinery outputs supporting technical, commercial, and industrial applications.',
      image: '/images/products/speciality-products.png',
      imageTone: 'from-blue-300/25 via-emerald-200/10 to-slate-950',
    },
  ],
}

export const production = {
  title: 'Production & Refinery Operations',
  eyebrow: 'Operations',
  description: 'NRL is engaged in the manufacturing, production, and sale of a large range of petroleum products through an integrated refinery complex.',
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
  title: 'Certifications & Public Warning',
  eyebrow: 'Compliance',
  description: 'NRL maintains internationally recognized management certifications and warns applicants to verify job offers through official channels.',
  certifications: ['ISO 9001 Certified', 'ISO 14001 Certified', 'ISO 45001 Certified', 'Rated AA, A1 By PACRA'],
  warningTitle: 'Beware of Fake Job Offers',
  warningPoints: [
    'NRL never randomly approaches people with job offers unless the person has submitted a CV and been interviewed.',
    'No payment is expected from candidates for NRL jobs, which is considered highly unethical.',
    'All NRL employees have official email addresses such as @nrlpak.com.',
    'For verification, contact HR on 021-35064981-85, 021-35064977-79, or 021-35064135-37.',
  ],
}

export const investors = {
  title: "Investors' Grievances Contacts",
  eyebrow: 'Investor support',
  description: 'Shareholders and investors can reach the relevant NRL departments through the following official contact points.',
  highlights: [
    {
      title: 'Treasurer',
      description: 'PABX Ext. 2269 | Direct: 021-35054708 | Email: treasurer@nrlpak.com',
    },
    {
      title: 'Shares Section',
      description: 'PABX Ext. 2233 | Email: incharge_shares@nrlpak.com',
    },
    {
      title: 'Financial Reports',
      description: 'Access official company reporting and investor disclosures.',
    },
    {
      title: 'Shareholder Information',
      description: 'Investor services, notices, declarations, and shareholder records.',
    },
  ],
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
    address: '7-B, Korangi Industrial Area, P.O. Box 8228, Karachi-74900, Pakistan.',
    uan: '111-675-675',
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
