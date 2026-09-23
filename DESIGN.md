---
name: "Rushil Choksi Portfolio"
description: "A quiet editorial system for presenting security and infrastructure work with proof-first clarity."
colors:
  surface: "#eef0ed"
  surface-alt: "#e4e7e2"
  ink: "#171915"
  muted: "#636861"
  rule: "#c8ccc5"
  accent: "#e9502b"
  accent-ink: "#a82b0e"
  focus: "#c93a17"
  dark-surface: "#111310"
  dark-surface-alt: "#181b17"
  dark-ink: "#eceee9"
  dark-muted: "#a7aca4"
  dark-rule: "#373b35"
  dark-accent: "#ff6b45"
  dark-accent-ink: "#ff8a6c"
  dark-focus: "#ff8a6c"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, sans-serif"
    fontSize: "clamp(3.25rem, 7.4vw, 6rem)"
    fontWeight: 640
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, sans-serif"
    fontSize: "clamp(3rem, 6.2vw, 6rem)"
    fontWeight: 640
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Schibsted Grotesk Variable, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 4.5rem)"
    fontWeight: 570
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Schibsted Grotesk Variable, sans-serif"
    fontSize: "clamp(1rem, 0.92rem + 0.2vw, 1.125rem)"
    fontWeight: 440
    lineHeight: 1.55
  label:
    fontFamily: "Martian Mono Variable, monospace"
    fontSize: "0.72rem"
    fontWeight: 440
    lineHeight: 1.55
    letterSpacing: "0.02em"
rounded:
  square: "0"
  focus: "2px"
  route-turn: "3.5rem"
spacing:
  space-1: "0.5rem"
  space-2: "0.75rem"
  space-3: "1rem"
  space-4: "1.5rem"
  space-5: "2rem"
  space-6: "3rem"
  space-7: "4.5rem"
  space-8: "7rem"
  space-9: "10rem"
  page-gutter: "clamp(1.25rem, 4.6vw, 5rem)"
components:
  navigation-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    height: "2.75rem"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.65rem 0.85rem"
  project-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "clamp(1.5rem, 3vw, 2.75rem) 0"
  project-preview:
    backgroundColor: "{colors.surface-alt}"
    rounded: "{rounded.square}"
    height: "min(70vh, 46rem)"
    width: "100%"
  writing-row:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "2rem 0"
    height: "8.5rem"
  portrait-media:
    backgroundColor: "{colors.surface-alt}"
    rounded: "{rounded.square}"
    width: "100%"
---

# Design System: Rushil Choksi Portfolio

## Overview

**Creative North Star: "Engineering Change Proof"**

This system reads like an engineer's marked-up change record: sparse, legible, and organized by evidence. Cool paper surfaces, graphite type, structural rules, and one safety-orange route create quiet technical luxury without turning the portfolio into a terminal, dashboard, or cybersecurity costume.

Typography and composition carry the identity. Large sans-serif statements establish authorship; mono metadata supplies factual precision; square media and flat tonal fields keep the work credible. Motion is exact and brief, limited to revealing hierarchy, tracing a route, and confirming which artifact is active.

**Key Characteristics:**

- Cool off-white and graphite surfaces with a single safety-orange route.
- Wide editorial type contrasted with compact mono metadata.
- Sparse rules, square media, and open composition instead of cards.
- Precise, reduced-motion-safe feedback tied to reading and navigation.
- One recurring routed-line signature, used structurally rather than decoratively.

## Colors

The palette behaves like cool drafting paper marked once in safety orange, with an equivalent graphite-and-ember dark scheme.

### Primary

- **Safety Orange** (`{colors.accent}`): the single route trace, selected text, link underline, and media-corner signal.
- **Deep Route Orange** (`{colors.accent-ink}`): active titles where the bright accent would not provide enough reading contrast.
- **Focus Route** (`{colors.focus}`): visible keyboard outlines only.

### Neutral

- **Cool Paper** (`{colors.surface}`): the primary light canvas.
- **Tonal Paper** (`{colors.surface-alt}`): the writing field and media placeholders.
- **Graphite Ink** (`{colors.ink}`): primary text and decisive rules.
- **Drafting Gray** (`{colors.muted}`): supporting copy and mono metadata.
- **Hairline Gray** (`{colors.rule}`): section, row, and chronology dividers.
- **Night Paper / Night Tonal Paper** (`{colors.dark-surface}`, `{colors.dark-surface-alt}`): dark-scheme canvases.
- **Chalk Ink / Night Gray / Night Rule** (`{colors.dark-ink}`, `{colors.dark-muted}`, `{colors.dark-rule}`): dark-scheme text and structure.
- **Night Safety Orange / Night Route / Night Focus** (`{colors.dark-accent}`, `{colors.dark-accent-ink}`, `{colors.dark-focus}`): dark-scheme accents with preserved contrast.

### Named Rules

**The One Route Rule.** Orange marks navigation, selection, or a routed structural handoff; it never becomes a decorative fill system.

**The Two Papers Rule.** Use the primary surface for most reading and the alternate surface for one clear tonal shift, not for stacking containers.

## Typography

- **Display Font:** Schibsted Grotesk Variable (with sans-serif fallback)
- **Body Font:** Schibsted Grotesk Variable (with sans-serif fallback)
- **Label/Mono Font:** Martian Mono Variable (with monospace fallback)

**Character:** Schibsted Grotesk provides wide, confident editorial shapes without ornamental drama. Martian Mono appears only where content behaves like coordinates, provenance, or structured metadata.

### Hierarchy

- **Display** (640, fluid display scale, 0.84 line-height): the two-line name; on wide desktops it expands beyond the base display token to `clamp(8rem, 12.2vw, 11rem)`.
- **Headline** (640, fluid section scale, 0.95 line-height): major section openings with short, balanced lines.
- **Title** (570, fluid project scale, 0.98 line-height): selected work and other artifact titles.
- **Body** (440, fluid body scale, 1.55 line-height): direct explanatory copy, normally held between 44ch and 65ch.
- **Label** (440, compact mono scale, 0.02em letter-spacing): context, location, chronology markers, and publication metadata.

### Named Rules

**The Metadata Boundary Rule.** Mono type identifies and locates; it does not replace prose, headlines, or navigation.

**The Short Display Rule.** Large type stays terse enough to remain a compositional field, never a paragraph enlarged for effect.

## Layout

The page uses a centered shell capped at 100rem with a fluid horizontal gutter. Desktop compositions sit on twelve columns: the hero positions its name, introduction, focus list, and route independently; work divides into a seven-to-five index-and-preview relationship; About assigns copy, portrait, and chronology distinct spans.

Vertical rhythm follows the extracted nine-step spacing scale. Sections use generous 10rem block spacing at wide sizes, tightening to 7rem below 48rem. At 64rem the work preview moves inline with each project and About reflows; at 48rem the grid becomes one column; below 30rem the wordmark abbreviates and secondary hero metadata disappears. Responsive changes preserve the reading order and ordinary page flow.

**The Open Field Rule.** Group with alignment, whitespace, and hairlines before introducing a new surface.

## Elevation & Depth

The system uses no shadows. Depth comes from alternating paper tones, sticky positioning, crop, scale, and image reveal; every surface remains flat at rest and in interaction.

**The Flat Evidence Rule.** Do not simulate importance with floating cards, ambient shadows, glass, or blur; let content scale and structural placement establish priority.

## Shapes

Media, rows, and content regions are square-cornered. Hairline borders provide most geometry. The sole large curve is the 3.5rem turn in the orange route trace, tightened to 2.25rem on smaller screens; the curve denotes a change in reading direction rather than a general radius style. A 2px radius is reserved for focus-outline fit.

**The Singular Curve Rule.** Curvature belongs to the routed trace only; do not spread rounded rectangles across the interface.

## Components

### Navigation

- **Style:** one ruled desktop line with the wordmark left, primary anchors centered, and one external profile right; the smallest layout abbreviates the wordmark to “RC.”
- **State:** links retain native text behavior and draw a 1px underline from right to left on hover. Keyboard focus uses the dedicated 2px focus outline with a 5px offset.
- **Targets:** interactive links maintain a 2.75rem minimum height.

### Routed Hero

- **Character:** an oversized two-line name sits in an open editorial field, counterweighted by one concise role statement and optional mono focus metadata.
- **Signature:** the safety-orange line turns once and runs into the next section. The initial reveal uses clipped vertical movement only when reduced motion is not requested.

### Project Rows

- **Shape:** full-width, square rows separated by 1px rules; no enclosing card.
- **Hierarchy:** the project title dominates, context sits in mono at the far edge, and explanatory copy is capped at 56ch.
- **State:** the active title shifts to deep route orange. Mouse movement offsets the paired preview by at most 12px; keyboard focus activates the same preview state.
- **Responsive:** below 64rem, each row receives its own inline image and the pointer-reactive preview is removed.

### Project Preview

- **Style:** a sticky, clipped media field on tonal paper with edge-to-edge imagery and a single orange corner rule.
- **State:** active images reveal from a clipped top edge and settle from a restrained 1.025 scale. No shadow or rounded mask is used.

### Writing Rows

- **Style:** large titles and right-aligned mono provenance sit between hairline dividers on the alternate paper tone.
- **State:** hover and keyboard focus color the title deep orange and translate it 0.55rem; the metadata moves above the title on small screens.

### Portrait Figure

- **Style:** a square-cornered 5:7 crop with restrained grayscale and contrast, followed by a mono location caption.
- **Placement:** it supports the About narrative and never appears as hero decoration.

### Chronology

- **Style:** a description list divided by hairlines, pairing compact mono markers with a strong role or institution and muted detail.
- **Responsive:** column widths tighten without converting entries into cards.

## Do's and Don'ts

### Do:

- **Do** make the person's name and current work legible within the first viewport.
- **Do** organize evidence with open grids, exact alignment, and 1px structural rules.
- **Do** reserve orange for the single route, active states, focus, and link evidence.
- **Do** keep media square-cornered and provide inline touch alternatives for pointer previews.
- **Do** preserve visible focus, ordinary scrolling, text selection, and reduced-motion behavior.

### Don't:

- **Don't** add card stacks, floating pills, gradients, glass, ambient shadows, or generalized rounded containers.
- **Don't** turn mono typography into a terminal aesthetic or use cybersecurity motifs such as code rain, shields, locks, or neon grids.
- **Don't** introduce multiple accent colors or repeat the routing trace as surface decoration.
- **Don't** use animation as a prerequisite for understanding content or reaching a link.
- **Don't** promote unverified metrics, stock imagery, or confidential work into visual proof.
