# Omar Allam — portfolio

Astro portfolio with a shared layout, responsive styles, seven project pages,
and preserved routes from the original static website.

## Run locally

Use a supported Node.js LTS release (Node 22.12+ or Node 24 recommended).

```sh
npm install
npm run build
npm run dev -- --host 0.0.0.0
```

Open http://localhost:4321. If that port is occupied, Astro prints the selected
port in the terminal. `npm run dev` also works for a localhost-only preview.
`npm run preview` previews the production build.

## Edit the site

- `src/pages/index.astro`: hero, featured project, existing projects, experience,
  and contact.
- `src/pages/projects/mips-pipeline.astro`: CPU project summary and verification.
- `src/pages/projects/{frontenac,asv,aptera,acdc,rover,humantracker}.astro`:
  existing project content migrated to Astro.
- `src/layouts/SiteLayout.astro`: shared document, navigation, and footer.
- `src/components/Pipeline.astro`: responsive pipeline visualization.
- `src/components/ProjectCard.astro`: homepage project card.
- `src/styles/global.css`: shared desktop and mobile styles.
- `src/config/site.ts`: contact links and the exact CPU repository URL.
- `public/qualcomm.png`: supplied Qualcomm image, served as `/qualcomm.png`.
- `public/resume.pdf`: current Hardware Technology resume, supplied as
  `Omar_Allam_Resume_Hardware_Technology.pdf`.
- `public/papers/aQuatonomous-2026-TheFrontenac.pdf`: supplied Frontenac team
  paper, linked from the Frontenac project page without modification.
- `public/assets/`: original project images and headshot; the original CPU
  architecture SVG was copied from the supplied archive, and the supplied
  GTKWave screenshot is stored as `mips-waveform.png`.
- `astro.config.mjs`: Astro configuration.
- `src/pages/[legacy].ts`: static redirect files for all six original
  `project-*.html` URLs; hosts can supply HTTP redirects if desired.
- `src/middleware.ts`: keeps `/index.html` working in development. Static hosts
  serve the generated homepage at that URL directly.

Original HTML, CSS, images, and resume are preserved locally in the ignored
`legacy/` directory, outside the published site and Git repository. The six
migrated project pages retain their existing claims;
the Frontenac typo “foound” was corrected, empty callouts removed, and remote
stock-placeholder image fallbacks removed.

## CPU source and evidence

The portfolio summarizes `mips-pipeline-final.zip` using its `README.md`,
`results/VERIFICATION.md`, `docs/architecture.svg`, RTL, and self-checking
testbench. The displayed measurements are the archive’s recorded results, not
a new simulation run by the portfolio build. No timing, frequency, or area
claim is made. Complete RTL remains in the separate CPU project. The technical
paper PDF and its links are not included in the published website.

The homepage project selection is MIPS, Frontenac, AC–DC Converter, and Human
Activity Recognition. aQuatonomous Co-Captain and Autonomous Rover were removed
from the project selection; their existing pages remain available for old
links. Aptera appears only in experience, with its existing detail page retained.
Frontenac’s image uses centered, uncropped framing, and its team paper is linked
from the project page.

Fonts are requested from Google Fonts with local system-font fallbacks. All
project imagery, the architecture diagram, the Qualcomm logo, and the resume
are served locally.

## File migration

- Moved root `index.html`, `style.css`, six `project-*.html` files, `assets/`, and
  `resume.pdf` into `legacy/` for preservation.
- Copied the seven existing images to `public/assets/`, copied the supplied
  `QUALCOMM.png` to `public/qualcomm.png`, and copied the current resume to
  `public/resume.pdf`.
- Added `public/assets/mips-architecture.svg` and `public/favicon.svg`.
- Added `public/papers/aQuatonomous-2026-TheFrontenac.pdf` unchanged from the
  supplied attachment.
- Added the eight Astro pages, legacy redirect endpoint, middleware, two
  components, shared layout, styles, and link configuration listed above.
- Added `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`,
  `.gitignore`, and this README.

`node_modules/`, `.astro/`, `dist/`, and `.npm-cache/` are generated locally and
ignored. The build publishes only the Astro pages and `public/` assets.

## Verification completed

- `npm install` completed; Astro 7.3.3 installation reported zero vulnerabilities.
- `npm run build` passed after the final content and style changes.
- All eight pages were rendered at 1440 px and 390 px: 16 checks, zero horizontal
  overflow failures, and zero broken images.
- Desktop hero and Frontenac framing, mobile hero and vertical MIPS pipeline
  were visually reviewed in Chrome.
- Local pages, legacy URLs, images, resume, and the Frontenac paper returned
  HTTP 200. The Frontenac paper opened in Chrome’s PDF viewer (12 pages).
- The CPU technical paper and source code are absent from the build.
- The CPU buttons link to `github.com/Omarooo27/five-stage-mips-pipeline`.
