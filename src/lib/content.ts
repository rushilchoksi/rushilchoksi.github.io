export type Project = {
  title: string
  context: string
  description: string
  image: string
  imageAlt: string
  href?: string
  linkLabel?: string
}

export type Writing = {
  title: string
  topic: string
  publication: string
  href: string
}

export const site = {
  name: 'Rushil Choksi',
  role: 'Software Security Engineer',
  company: 'Aurelian',
  location: 'Seattle, Washington',
  introduction:
    'Software security engineer at Aurelian, working across infrastructure, systems, and AI.',
  profiles: [
    { label: 'GitHub', href: 'https://github.com/rushilchoksi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rushil-choksi' },
    { label: 'Medium', href: 'https://rushilchoksi.medium.com/' },
  ],
} as const

export const selectedProjects: Project[] = [
  {
    title: 'Space Launch Window Detection',
    context: 'US Space Force / SDA',
    description:
      'A prediction model for identifying launch windows for stealth space launches using unclassified data. The underlying work is private, so the public record stops there.',
    image: '/media/space-launch.webp',
    imageAlt: 'USSPACECOM operations room with wall-sized mission displays.',
  },
  {
    title: 'Secure Authentication Architecture',
    context: 'Academic project',
    description:
      'A six-layer authentication architecture designed around defense in depth.',
    image: '/media/secure-auth.webp',
    imageAlt: 'An operator working at a multi-screen workstation.',
  },
  {
    title: 'Solar Splash',
    context: 'Side project',
    description:
      'A scheduled solar-panel cleaning system controlled from a mobile application.',
    image: '/media/solar-splash.webp',
    imageAlt: 'Three photographs of solar-panel installations.',
    href: 'https://github.com/rushilchoksi/Solar-Splash',
    linkLabel: 'View repository',
  },
]

export const archivedProjects: Project[] = [
  {
    title: 'RNN Password Generator',
    context: 'Academic project',
    description:
      'A recurrent neural network experiment for generating readable passwords.',
    image: '/media/rnn-password.webp',
    imageAlt: 'A macOS login screen from the password generator project.',
    href: 'https://github.com/rushilchoksi/Neural-Network-Password-Generator',
    linkLabel: 'View repository',
  },
  {
    title: 'Secure FTP',
    context: 'Academic project',
    description:
      'A file-sharing project that encrypts files before transfer between two parties.',
    image: '/media/secure-ftp.webp',
    imageAlt: 'The Secure FTP project interface showing a file directory.',
    href: 'https://github.com/rushilchoksi/DSS',
    linkLabel: 'View repository',
  },
]

export const chronology = [
  {
    marker: 'Now',
    title: 'Aurelian',
    detail: 'Software Security Engineer',
  },
  {
    marker: 'Education',
    title: 'University of Southern California',
    detail: 'MS, Cyber Security Engineering',
  },
  {
    marker: 'Earlier',
    title: 'Sony',
    detail: 'Security Architect Intern',
  },
  {
    marker: 'Earlier',
    title: 'técrave',
    detail: 'Co-founder and CTO',
  },
] as const

export const writing: Writing[] = [
  {
    title: "Schrödinger's Safe: Paradox of Data Security in the Quantum Era",
    topic: 'Quantum cryptography',
    publication: 'Medium',
    href: 'https://rushilchoksi.medium.com/schr%C3%B6dingers-safe-paradox-of-data-security-in-the-quantum-era-f8303d6e1879',
  },
  {
    title: 'File-less Malware: Still a Threat?',
    topic: 'Threat monitoring',
    publication: 'System Weakness',
    href: 'https://systemweakness.com/file-less-malware-still-a-threat-5dfe8631bbc3',
  },
  {
    title: 'Monitoring Financial Transactions Using Supervised Machine Learning',
    topic: 'Machine learning',
    publication: 'Medium',
    href: 'https://rushilchoksi.medium.com/monitoring-financial-transactions-using-supervised-machine-learning-410777118577',
  },
  {
    title: 'Why Security Monitoring & UEBA?',
    topic: 'Security monitoring',
    publication: 'Medium',
    href: 'https://rushilchoksi.medium.com/why-security-monitoring-ueba-d8cb1ae01aef',
  },
]
