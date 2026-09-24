import { useEffect, useRef } from 'react'
import { archivedProjects, chronology, selectedProjects, site, writing } from './lib/content'

function useBoundary() {
  const worldRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const world = worldRef.current
    const slider = sliderRef.current
    if (!world || !slider) return
    let frame = 0
    let next = 0.62
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const commit = () => {
      world.style.setProperty('--boundary-x', next.toFixed(4))
      slider.value = String(Math.round(next * 100))
      frame = 0
    }
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || reduced) return
      next = Math.min(0.92, Math.max(0.08, event.clientX / window.innerWidth))
      if (!frame) frame = window.requestAnimationFrame(commit)
    }
    const slide = () => {
      next = Number(slider.value) / 100
      if (frame) window.cancelAnimationFrame(frame)
      commit()
    }
    const sections = Array.from(world.querySelectorAll<HTMLElement>('[data-scene]'))
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          world.dataset.activeScene = (entry.target as HTMLElement).dataset.scene
          break
        }
      }
    }, { rootMargin: '-42% 0px -42% 0px' })
    sections.forEach((section) => observer.observe(section))
    window.addEventListener('pointermove', move, { passive: true })
    slider.addEventListener('input', slide)
    return () => {
      window.removeEventListener('pointermove', move)
      slider.removeEventListener('input', slide)
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { worldRef, sliderRef }
}

function EdgeNavigation() {
  return <header className="edge-navigation">
    <a className="edge-mark" href="#origin" aria-label="Rushil Choksi, back to top">R<span>/</span>C</a>
    <nav aria-label="Main navigation">
      <a href="#current">Now</a><a href="#work">Work</a><a href="#history">History</a><a href="#writing">Writing</a>
    </nav>
    <a className="edge-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
  </header>
}

function BoundaryControl({ sliderRef }: { sliderRef: React.RefObject<HTMLInputElement | null> }) {
  return <div className="boundary-control">
    <label htmlFor="boundary-range">Visibility boundary</label>
    <input id="boundary-range" ref={sliderRef} type="range" min="8" max="92" defaultValue="62" aria-label="Move the visibility boundary" />
    <span className="boundary-control-hint">Drag / arrow keys</span>
  </div>
}

function Identity() {
  const name = <div className="identity-name"><span>RUSHIL</span><span>CHOKSI</span></div>
  return <section className="scene identity" id="origin" data-scene="identity" aria-labelledby="identity-title">
    <h1 className="visually-hidden" id="identity-title">Rushil Choksi, software security engineer</h1>
    <div className="identity-plane identity-plane-base" aria-hidden="true">{name}</div>
    <div className="identity-plane identity-plane-visible" aria-hidden="true">{name}</div>
    <div className="identity-rules" aria-hidden="true"><i /><i /><i /></div>
    <div className="identity-bottom">
      <p>{site.focus.map((item, index) => <span key={item}>{index > 0 && <i aria-hidden="true">/</i>}{item}</span>)}</p>
      <a href="#current">Enter <span aria-hidden="true">↓</span></a>
    </div>
    <p className="identity-coordinate">{site.location}</p>
  </section>
}

function Current() {
  return <section className="scene current" id="current" data-scene="current" aria-labelledby="current-title">
    <div className="current-sticky">
      <div className="current-topline"><span>01 / Current state</span><span>{site.company}</span></div>
      <p className="current-verb">{site.currentLead} <em>{site.currentEmphasis}</em></p>
      <div className="current-body">
        <h2 id="current-title">Security<br /><span>has structure.</span></h2>
        <div className="current-descriptor"><p>{site.role} at {site.company}.</p><p>{site.currentDetail}</p></div>
      </div>
      <div className="current-boundary-copy" aria-hidden="true"><span>Outside</span><span>Inside</span></div>
    </div>
  </section>
}

function ProjectScene({ index }: { index: number }) {
  const project = selectedProjects[index]
  return <section className={`scene project-scene project-scene-${index + 1}`} id={index === 0 ? 'work' : undefined} data-scene={`project-${index + 1}`} aria-labelledby={`project-title-${index}`}>
    <div className="project-sticky">
      <div className="project-head"><span>0{index + 2} / Selected work</span><span>{project.context}</span></div>
      <div className="project-number" aria-hidden="true">0{index + 1}</div>
      <h2 id={`project-title-${index}`} data-title={project.title}>{project.title}</h2>
      <figure className="project-image"><img src={project.image} alt={project.imageAlt} loading="lazy" width="1200" height="800" /><figcaption>{project.context}</figcaption></figure>
      <div className="project-disclosure"><span>Visible / public</span><p>{project.description}</p>{project.href && <a href={project.href} target="_blank" rel="noreferrer">{project.linkLabel ?? 'View project'} <span aria-hidden="true">↗</span></a>}</div>
      <div className="project-aperture" aria-hidden="true" />
    </div>
  </section>
}

function Provenance() {
  return <section className="scene provenance" id="history" data-scene="history" aria-labelledby="history-title">
    <div className="provenance-head"><span>04 / Provenance</span><span>Where the work comes from</span></div>
    <h2 id="history-title">Before<br /><i>now.</i></h2>
    <div className="provenance-records">{chronology.map((item, index) => <div className="provenance-record" key={`${item.title}-${item.marker}`}><span className="provenance-index">0{index + 1}</span><div><strong>{item.title}</strong><span>{item.detail}</span></div><span className="provenance-marker">{item.marker}</span></div>)}</div>
    <div className="archive"><p>Earlier builds</p><ul>{archivedProjects.map((project) => <li key={project.title}><a href={project.href} target="_blank" rel="noreferrer">{project.title} <span aria-hidden="true">↗</span></a></li>)}</ul></div>
  </section>
}

function Writing() {
  return <section className="scene writing-world" id="writing" data-scene="writing" aria-labelledby="writing-title">
    <div className="writing-head"><span>05 / Writing</span><span>Selected notes</span></div>
    <h2 id="writing-title">A few things<br />I&apos;ve <i>thought through.</i></h2>
    <div className="writing-records">{writing.map((article, index) => <a className="writing-record" href={article.href} target="_blank" rel="noreferrer" key={article.title}><span className="writing-index">0{index + 1}</span><span className="writing-record-title">{article.title}</span><span className="writing-record-topic">{article.topic}<br />{article.publication}</span><span className="writing-arrow" aria-hidden="true">↗</span></a>)}</div>
    <p className="writing-exit-note">Articles open at their original publication.</p>
  </section>
}

function Human() {
  return <section className="scene human" id="about" data-scene="human" aria-labelledby="human-title">
    <div className="human-index">06 / Off the clock</div>
    <figure className="human-portrait"><img src="/media/rushil-portrait.webp" alt="Rushil Choksi taking a mirror photograph." width="750" height="1050" loading="lazy" /><figcaption>{site.portraitCaption}</figcaption></figure>
    <div className="human-copy"><h2 id="human-title">Still<br />curious.</h2><p>{site.humanDetail}</p></div>
  </section>
}

function Exit() {
  return <footer className="scene exit" id="contact" data-scene="exit">
    <div className="exit-head"><span>07 / Exit</span><span>{site.location}</span></div>
    <p className="exit-question">Say<br /><i>hello.</i></p>
    <a className="exit-email" href={site.contact.href} target="_blank" rel="noreferrer">{site.contact.label} <span aria-hidden="true">↗</span></a>
    <div className="exit-bottom"><span>Rushil Choksi</span><nav aria-label="External profiles">{site.profiles.map((profile) => <a href={profile.href} target="_blank" rel="noreferrer" key={profile.label}>{profile.label} ↗</a>)}</nav><a href="#origin">Back to top ↑</a></div>
  </footer>
}

function App() {
  const { worldRef, sliderRef } = useBoundary()
  return <div className="experience" ref={worldRef} data-active-scene="identity">
    <a className="skip-link" href="#current">Skip opening scene</a>
    <EdgeNavigation />
    <div className="world-line" aria-hidden="true"><span /></div>
    <BoundaryControl sliderRef={sliderRef} />
    <main><Identity /><Current /><ProjectScene index={0} /><ProjectScene index={1} /><Provenance /><Writing /><Human /></main>
    <Exit />
  </div>
}

export default App
