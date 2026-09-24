---
name: "Rushil Choksi Portfolio"
description: "A registration boundary reveals the person, the work, and the limits of what can be shown."
colors:
  vermilion: "#e95432"
  vermilion-ink: "#872713"
  graphite: "#111312"
  coal: "#171a19"
  bone: "#edeae1"
  paper: "#e4e1d8"
  rule: "#b7b8b0"
  muted: "#7a7e78"
  provenance: "#c6c7bd"
  writing: "#202423"
  human: "#ddd8cc"
typography:
  display:
    fontFamily: "Geologica Variable, sans-serif"
    fontSize: "clamp(6.8rem, 17.6vw, 25rem)"
    fontWeight: 740
    lineHeight: 0.73
    letterSpacing: "-0.092em"
    fontVariation: "'wght' 740, 'SHRP' 100, 'CRSV' 0"
  headline:
    fontFamily: "Geologica Variable, sans-serif"
    fontSize: "clamp(5.5rem, 9.2vw, 11rem)"
    fontWeight: 710
    lineHeight: 0.8
    letterSpacing: "-0.085em"
  serif-accent:
    fontFamily: "Instrument Serif, serif"
    fontWeight: 400
  body:
    fontFamily: "Geologica Variable, sans-serif"
    fontSize: "clamp(0.95rem, 1.12vw, 1.13rem)"
    lineHeight: 1.48
  label:
    fontFamily: "Martian Mono Variable, monospace"
    fontSize: "0.61rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.07em"
rounded:
  square: "0"
spacing:
  page-gutter: "clamp(1rem, 3.5vw, 4.5rem)"
components:
  edge-navigation:
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    height: "4.4rem"
  boundary-control:
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    width: "min(19rem, 29vw)"
    rounded: "{rounded.square}"
  project-disclosure:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.square}"
    padding: "1rem 0 0"
  writing-record:
    backgroundColor: "{colors.writing}"
    textColor: "{colors.bone}"
    rounded: "{rounded.square}"
    height: "8.6rem"
    padding: "1.2rem 0"
  writing-record-hover:
    backgroundColor: "#2e3330"
    textColor: "{colors.bone}"
    rounded: "{rounded.square}"
---

# Design System: Rushil Choksi Portfolio

## Overview

**Creative North Star: "Registration Boundary"**

The site behaves like a security-print registration plate. Two aligned graphite and bone planes hold Rushil's name, and a movable vermilion edge determines which layer is visible. That same boundary cuts the current-work scene and alters the disclosure of selected-work images. It gives the security-first subject a visible rule instead of decorating the page with security symbols.

The opening is cinematic and architectural; the later scenes become a calmer sequence of provenance, writing, a personal portrait, and contact. Oversized type, quiet surfaces, precise rules, and sparse metadata carry the experience. Content and links remain readable and usable without pointer movement or animation.

**Key Characteristics:**

- Two synchronized name planes divided by one movable vertical boundary.
- Graphite, coal, bone, and paper fields with a restrained vermilion signal.
- Geologica structure, italic Instrument Serif counterpoint, and Martian Mono metadata.
- Sticky full-viewport scenes for current work and two selected projects; flat records afterward.
- Square media, fine rules, visible controls, and no ambient elevation.

## Colors

One warm vermilion signal marks the registration edge, indices, arrows, focus outlines, and selected serif emphasis. Graphite and bone alternate as large fields; other neutrals distinguish chapters rather than forming a card palette.

### Primary

- **Vermilion** (`{colors.vermilion}`): the moving boundary and project aperture, control thumb, structural record line, selection, focus, and small navigational signals. It is rarely a large fill.
- **Vermilion Ink** (`{colors.vermilion-ink}`): legible accent text for project numbers and public-disclosure labels on light project fields.

### Neutral

- **Graphite** (`{colors.graphite}`): the dark identity plane, image well, and final contact field; primary ink on light chapters.
- **Coal** (`{colors.coal}`): the current-work scene's dark half.
- **Bone** (`{colors.bone}`): the light identity and project fields, and primary text on dark chapters.
- **Paper** (`{colors.paper}`): the current-work light reveal and the second project scene.
- **Rule Gray** (`{colors.rule}`): low-contrast registration marks and hairlines.
- **Muted Gray** (`{colors.muted}`): secondary boundary captions.
- **Provenance Stone** (`{colors.provenance}`): the history scene's full field.
- **Writing Graphite** (`{colors.writing}`): the article index's full field.
- **Human Bone** (`{colors.human}`): the portrait scene's full field.

**The Visible Edge Rule.** Vermilion should mark an edge, state, coordinate, or action. Keep large reading planes neutral.

**The Chapter Field Rule.** Change the whole scene's tone when the story changes; do not parcel content into floating cards.

## Typography

**Display Font:** Geologica Variable (with sans-serif fallback)

**Body Font:** Geologica Variable (with sans-serif fallback)

**Accent Font:** Instrument Serif italic (with serif fallback)

**Label/Mono Font:** Martian Mono Variable (with monospace fallback)

**Character:** Geologica's variable sharpness and weight make the name and structural headings feel constructed. Instrument Serif interrupts them briefly in the second name line and selected later headlines. Martian Mono carries navigation, scene numbers, provenance, controls, links, and captions.

### Hierarchy

- **Identity display** (`{typography.display}`): the two-line decorative name, duplicated across aligned planes. A single visually hidden `h1` supplies the accessible name and role.
- **Section headline** (`{typography.headline}`): current-work statement; project and later-chapter headlines use related, scene-specific fluid sizes and Geologica sharpness settings.
- **Serif accent** (`{typography.serif-accent}`): italic second identity line and one emphatic word in selected later headings; not a body face.
- **Body** (`{typography.body}`): short descriptions and project disclosures in the regular Geologica texture.
- **Structured label** (`{typography.label}`): compact uppercase mono with measured tracking; sizes vary slightly by component and viewport.

**The Two-Voice Rule.** Geologica establishes structure; Instrument Serif interrupts it briefly for a human inflection. Martian Mono locates and labels information.

**The Short Statement Rule.** Oversized headings are concise compositional objects. Explanatory detail sits in nearby body copy.

## Layout

The experience is a vertical sequence of eight scenes: identity, current state, two selected projects, provenance, writing, the personal portrait, and exit. The opening identity fills at least one small viewport height. Current work and both projects use taller scroll regions with a `100svh` sticky interior. A fine fixed edge follows `--boundary-x` across those opening scenes, starting at 62% of viewport width. A range control moves it from 8% to 92%; mouse movement updates it on devices using a mouse. An intersection observer hides the edge and control once history, writing, portrait, or exit occupies the center reading band.

The horizontal gutter is `{spacing.page-gutter}`. The identity name is placed directly in the full viewport, with focus and entry cues near its base. Current work uses an asymmetric two-column statement and description. Each project places large type across an offset image, then anchors its public description and optional link in a ruled bottom disclosure strip. Later chapters use a full-width record rhythm: a narrow index and wide content field for history and writing; portrait and copy divide the human chapter.

At 1000px and below, current-work content stacks and project image/title proportions shift. At 700px and below, the gutter becomes 1rem; the two-line name, image aperture, disclosures, records, portrait, and footer each get a separate compact composition. The edge and range control remain visible in opening scenes, with a shorter 7.6rem control. Navigation remains direct anchors while some labels yield to width. At 390px and below, another navigation item is hidden and large type adjusts to the narrower viewport.

**The Controlled Reveal Rule.** One boundary position governs the opening states; do not add unrelated reveal mechanisms to individual components.

## Elevation & Depth

There are no box shadows. Tonal planes, clipping, cropped photography, sticky section interiors, and slight image scale provide depth. The identity's two color planes and the project's dark image overlay are flat layers, with a 1px vermilion edge making the transition legible. Writing-row hover changes surface tone and inline padding rather than lifting a card.

**The Flat Registration Rule.** Depth comes from aligned layers and controlled visibility, not glass, glow, or floating panels.

## Shapes

The shape language is rectangular and tightly cropped. The registration edge is a 1px vertical line with small square markers; the control thumb is a 12px square. Rules divide navigation and records. Project images are flush, square-cornered fields, and the portrait is a large, slightly rotated rectangle. No reusable rounded-card radius or pill silhouette exists.

## Components

### Edge navigation

A fixed three-part header holds the `R/C` mark, direct scene anchors, and Contact. Its bone text uses difference blending over changing fields. Links have 2.75rem minimum target height and a fine vermilion underline that grows on hover or focus. On narrow screens the layout tightens and lower-priority anchors are hidden rather than replaced by a menu.

### Boundary control

A fixed, labeled native range input controls the visibility boundary, including touch and keyboard arrow input. It sits at the lower right in the opening scenes; mouse movement drives the same value on desktop. The slider's line track and square vermilion thumb echo the fixed edge. It disappears after the selected-work scenes, when the boundary stops controlling the composition.

### Identity planes and current state

Two synchronized decorative name layers use opposite ink and field colors. The graphite layer is clipped to the controlled boundary, and its type shifts subtly with the edge. The current scene carries the same clip through a pale overlay against coal; difference blending keeps the white role statement and description legible across both planes.

### Project scenes

Each selected project is a tall sticky scene with a large title, grayscale image, small mono context, and a ruled public disclosure. A bone or paper occluding plane covers the image to the left of the boundary, revealing the photograph on the right; the 1px project aperture continues its line across the image. On desktop a duplicate title layer changes color at the same viewport boundary; on mobile that duplicate is removed. Links appear only where public destinations exist.

### Provenance and writing records

History uses numbered, hairline-divided rows with one vermilion registration line and an archive list below. Writing uses full-width article links: index, large title, provenance, and arrow. Hover or focus moves the link's padding into a darker tonal field; the article metadata drops away on mobile while title and destination remain visible.

### Portrait and exit

The portrait is a large, lightly desaturated personal image with a mono location caption, paired with a brief human note. The final graphite scene returns to monumental type, one direct contact link, external profiles, and a back-to-top anchor.

### Motion and access

Where view timelines are supported, the identity type releases upward on exit, project type shifts while project imagery settles from slight scale, and the portrait rotates into position. Boundary updates use a single animation frame. Native focus has a 2px vermilion outline with 5px offset, and a skip link bypasses the opening. Reduced-motion mode removes smooth scrolling, animation, and transitions; the boundary remains at its current visible position and the range control stays adjustable.

## Do's and Don'ts

### Do:

- **Do** keep the boundary tied to what is visible in the identity, current-work, and selected-project scenes.
- **Do** preserve a labeled range input and keyboard, touch, and reduced-motion access to the opening states.
- **Do** use Geologica for structural statements, Instrument Serif for brief italic contrast, and Martian Mono for exact metadata.
- **Do** keep public project descriptions, provenance, and external destinations readable without animation.
- **Do** compose each chapter as a distinct flat field with square media and fine structural rules.

### Don't:

- **Don't** return to the prior decorative routed-line motif or the index-plus-sticky-preview work layout.
- **Don't** turn the vermilion edge into repeated ornament, buttons, or broad colored panels.
- **Don't** introduce card stacks, pills, gradients, glass, glows, or ambient shadows.
- **Don't** add hacker-terminal or cybersecurity-symbol imagery in place of the actual visibility rule.
- **Don't** imply that confidential projects have public details or destinations that the content does not provide.
