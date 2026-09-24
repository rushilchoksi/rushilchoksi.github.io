# Rebuild Forensics

## Product mechanism

Rushil works on systems where invisible security constraints determine what infrastructure can expose, trust, route, and survive. The surface must let visitors feel selective visibility and state change before they read an explanation.

Audience scene: a design-aware technical peer or recruiter opens the site between other portfolios and decides within seconds whether the work has both engineering depth and authorship.

Cultural home: secure documents, structural engineering, scientific instrumentation, registration systems, and operational architecture. The visual world must not borrow from hacker cinema, dashboards, terminals, or generic generative art.

First proof: Rushil's name, then the hierarchy Security, Infrastructure, Software, experienced as behavior rather than a capability list.

## Existing site audit

Current dials: variance 6, motion 4, density 3.

What works:

- Accurate current positioning and centralized content data.
- Strong responsive fundamentals, crawlable markup, keyboard access, and reduced-motion support.
- A disciplined neutral palette and competent self-hosted typography.
- A small, credible work set with older projects visually demoted.

What makes it conventional:

- The DOM and story still resolve to hero, work list, About, writing list, and footer.
- The orange route is a decorative signature. It does not decide visibility, permission, or state.
- The name is large but inert. Scale is doing the job that composition and interaction should do.
- Selected work uses the familiar index plus sticky preview portfolio pattern.
- Sections change content but not spatial logic. The page never becomes a different state.
- Motion is local feedback, not choreography. Nothing persists and mutates across chapters.
- Mobile is a competent collapse of desktop rather than its own authored sequence.
- Schibsted Grotesk is functional but too neutral for the new display role.

## Reference principles

### Pensatori Irrazionali

- Establishes a complete visual universe before exposing conventional navigation.
- Uses authored material, lettering, and media as identity rather than interface decoration.
- Lets work enter as a choreographed sequence instead of a grid of portfolio containers.
- Maintains one dense expressive grammar across type, image, and transition.

### White Desert

- Makes expedition, remoteness, coordinates, and route structure inseparable from navigation.
- Uses vast scale and stillness to make motion moments meaningful.
- Treats photography as terrain and spatial evidence, not card artwork.
- Metadata feels native because it describes real orientation and movement.

### ERA Residence

- Connects the defining interaction to place and material rather than adding an effect after layout.
- Lets typography, botanical material, path geometry, and changing fields choreograph chapters.
- Uses theme change as an authored transition with a reason, not random section inversion.
- Breaks conventional composition while keeping the sales content findable.

### Shared extraction

1. The subject supplies the rules of the interface.
2. One visual mechanism survives the whole page and changes state.
3. Typography is spatial material, not a heading style.
4. Quiet and spectacle alternate.
5. Media enters through the world's logic rather than inside reusable cards.
6. Navigation is embedded in the experience without becoming undiscoverable.

## Rut

Category rut: dark developer portfolio with an animated shader behind a large name.

Predictable opposite: pale Swiss grid, huge sans-serif name, one orange routing line, editorial rows. This is the current site and must also be left behind.

## Seven grounded worlds

Ordered by initial resonance before the concept assignment:

1. Security-print registration plate: layered inks, apertures, misregistration, and selective legibility.
2. Seismic isolation diagram: load paths, shear boundaries, redundancy, and visible failover.
3. Signal-room patch field: physical routing, cross-connections, and deliberate propagation.
4. Darkroom contact sheet: exposure windows, masks, and information appearing only under controlled light.
5. Air-traffic plotting strip: exact sequencing, handoff, and spatial responsibility without literal aircraft UI.
6. Interference plate: phase shift, moire, and two coherent layers becoming legible only at the right relation.
7. Concrete transit wayfinding: severe architecture, directional typography, and changing thresholds.

The assignment selected candidate 6 with seed `6b55d158`. It becomes the most experimental prototype, not an excuse to reduce the page to a shader.

## Prototype set

### A: Registration Boundary

Two synchronized typographic layers occupy the viewport. A movable boundary changes which layer is trusted and therefore visible. The boundary persists into selected work, where it exposes the image, description, or confidential limit according to its position. Graphic source: security-print registration and optical inspection.

### B: Failover Structure

The name is held across two structural planes. Pointer pressure displaces one plane; the other takes load and restores legibility. Scroll transfers load into a second state, where each work scene temporarily becomes the active span. Graphic source: seismic isolation and redundant structures.

### C: Phase Field

The name exists as two nearly aligned typographic wavefronts. Pointer movement changes their phase, producing controlled interference that reveals Security, Infrastructure, and Software at different alignments. Scroll turns the field into a spatial mask for work. Graphic source: interference plates and signal coherence.

## Critique criteria

- Originality within personal websites
- Five-second visual impact
- Connection to security first, infrastructure second, software third
- Typographic authority in a still frame
- One coherent motion grammar
- Feasible implementation and graceful fallback
- Authored mobile translation
- Strength with motion paused

## Phase C decision

### Comparative score

| Criterion | A: Registration Boundary | B: Failover Structure | C: Phase Field |
| --- | ---: | ---: | ---: |
| Originality | 8 | 7 | 9 |
| Immediate impact | 9 | 8 | 8 |
| Connection to Rushil | 10 | 7 | 8 |
| Typographic strength | 9 | 8 | 8 |
| Motion potential | 9 | 8 | 10 |
| Technical feasibility | 9 | 9 | 7 |
| Mobile translation | 9 | 8 | 6 |
| Strength without motion | 10 | 8 | 7 |
| **Total** | **73** | **63** | **63** |

### Selected: Registration Boundary

The core action is conceptually exact: the visitor changes what is visible by
moving a trust boundary. The site is not decorated with security language; its
information behaves according to a security rule. The opening remains strong as
a still image, reads instantly, and translates to touch without changing its
meaning.

Failover Structure is visually rigorous but could belong to an architecture or
industrial-design studio unchanged. Phase Field is the most novel in motion,
but the field becomes too much of the identity, its typography loses authority
on mobile, and it risks the brief's explicit "shader as personality" failure.

The production direction may borrow one narrow behavior from Phase Field: a
moving boundary can emit a controlled signal disturbance. It will not inherit
the full interference-field aesthetic.

### Prototype evidence

Desktop and mobile captures are stored in `.impeccable/prototypes/`. The
connected in-app browser was unavailable in this environment, so the captures
were made from the running local application with Playwright CLI after that
limitation was disclosed.

### Composition study limitation

The built-in image generator was invoked for three static composition studies
after selection. It returned a usage-limit error before producing the first
study. No API-key fallback was used. The executable prototype is the production
composition reference.
