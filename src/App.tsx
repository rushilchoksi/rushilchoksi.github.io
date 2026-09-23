import SiteNav from './components/SiteNav'
import WorkIndex from './components/WorkIndex'
import { chronology, site, writing } from './lib/content'

function Hero() {
  return (
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <SiteNav />
      <div className="hero-composition">
        <h1 id="hero-title">
          <span>Rushil</span>
          <span>Choksi</span>
        </h1>
        <p className="hero-introduction">{site.introduction}</p>
        <p className="hero-aside" aria-label="Areas of focus">
          Infrastructure<br />
          Security<br />
          Systems<br />
          AI
        </p>
        <div className="route-trace" aria-hidden="true" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-section page-shell" id="about" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">
            I work on software security with a heavy infrastructure focus. I like
            systems that are understandable under pressure, not only when
            everything is behaving.
          </p>
          <p>
            I&apos;m based in Seattle. Outside the day job, I write about security,
            build small experiments, and keep following the threads between
            software, systems, and AI.
          </p>
        </div>

        <figure className="portrait">
          <img
            src="/media/rushil-portrait.webp"
            alt="Rushil Choksi taking a mirror photograph."
            width="750"
            height="1050"
            loading="lazy"
          />
          <figcaption>Seattle, Washington</figcaption>
        </figure>

        <dl className="chronology">
          {chronology.map((item) => (
            <div className="chronology-entry" key={`${item.marker}-${item.title}`}>
              <dt>{item.marker}</dt>
              <dd>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Writing() {
  return (
    <section className="writing-section" id="writing" aria-labelledby="writing-title">
      <div className="page-shell">
        <h2 id="writing-title">Writing</h2>
        <p className="writing-intro">
          Notes on security systems, monitoring, machine learning, and what
          changes when the assumptions do.
        </p>
        <div className="writing-list">
          {writing.map((article) => (
            <a
              className="writing-row"
              href={article.href}
              target="_blank"
              rel="noreferrer"
              key={article.title}
            >
              <span className="writing-title">{article.title}</span>
              <span className="writing-meta">
                {article.topic}<br />
                {article.publication}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer page-shell">
      <div>
        <p className="footer-name">Rushil Choksi</p>
        <p>{site.role}</p>
      </div>
      <nav aria-label="External profiles">
        {site.profiles.map((profile) => (
          <a href={profile.href} target="_blank" rel="noreferrer" key={profile.label}>
            {profile.label}
          </a>
        ))}
      </nav>
      <a href="#top">Back to top</a>
    </footer>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
        <Hero />
        <WorkIndex />
        <About />
        <Writing />
      </main>
      <Footer />
    </>
  )
}

export default App
