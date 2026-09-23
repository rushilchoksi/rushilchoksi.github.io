import { site } from '../lib/content'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Writing', href: '#writing' },
]

export default function SiteNav() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Rushil Choksi, back to top">
        <span className="wordmark-full">{site.name}</span>
        <span className="wordmark-short" aria-hidden="true">RC</span>
      </a>
      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        className="nav-external"
        href={site.profiles[1].href}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </header>
  )
}
