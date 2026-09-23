import { useRef, useState } from 'react'
import { archivedProjects, selectedProjects } from '../lib/content'

export default function WorkIndex() {
  const [active, setActive] = useState(0)
  const previewRef = useRef<HTMLDivElement>(null)

  const movePreview = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !previewRef.current) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12
    previewRef.current.style.setProperty('--preview-x', `${x}px`)
    previewRef.current.style.setProperty('--preview-y', `${y}px`)
  }

  const resetPreview = () => {
    previewRef.current?.style.setProperty('--preview-x', '0px')
    previewRef.current?.style.setProperty('--preview-y', '0px')
  }

  return (
    <section className="work-section page-shell" id="work" aria-labelledby="work-title">
      <h2 id="work-title">Selected work</h2>
      <div className="work-layout">
        <div className="project-list">
          {selectedProjects.map((project, index) => (
            <article
              className="project-row"
              data-active={active === index}
              key={project.title}
              onPointerEnter={() => setActive(index)}
              onFocusCapture={() => setActive(index)}
            >
              <div className="project-row-heading">
                <h3>{project.title}</h3>
                <span className="project-context">{project.context}</span>
              </div>
              <p>{project.description}</p>
              {project.href && (
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.linkLabel}
                </a>
              )}
              <img
                className="project-mobile-image"
                src={project.image}
                alt={project.imageAlt}
                width="960"
                height="800"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </article>
          ))}
        </div>

        <div
          className="project-preview"
          ref={previewRef}
          onPointerMove={movePreview}
          onPointerLeave={resetPreview}
          aria-hidden="true"
        >
          {selectedProjects.map((project, index) => (
            <img
              className="project-preview-image"
              data-active={active === index}
              src={project.image}
              alt=""
              width="960"
              height="800"
              loading={index === 0 ? 'eager' : 'lazy'}
              key={project.image}
            />
          ))}
          <div className="preview-rule" />
        </div>
      </div>

      <div className="archive-block">
        <h3>Earlier builds</h3>
        <div className="archive-list">
          {archivedProjects.map((project) => (
            <a
              className="archive-item"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <span>{project.title}</span>
              <span>{project.context}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
