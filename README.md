# TugaScript Portfolio

Afonso Barracha's personal portfolio, built as a playful Y2K/Windows-era website. It introduces Afonso, summarizes his technical background, and presents a data-driven archive of open-source work.

## Features

- Responsive, accessible Astro pages with a custom retro interface
- Light and dark themes persisted in `localStorage`
- Mobile navigation state persisted for the browser session
- Featured and chronological project collections generated from JSON data
- Expandable project details for languages, frameworks, tools, and storage
- Optimized local images through Astro's asset pipeline
- Static output with no backend or runtime service dependencies

The guestbook on the contact page is intentionally decorative and does not submit data.

## Tech stack

- [Astro 7](https://astro.build/)
- [Tailwind CSS 4](https://tailwindcss.com/) through its Vite plugin
- TypeScript with Astro's strict configuration
- Yarn Classic

## Routes

| Route | Description |
| --- | --- |
| `/` | Introduction, profile summary, skills, and featured projects |
| `/portfolio` | Complete open-source project archive, sorted newest first |
| `/contact` | Contact links and the decorative guestbook |

## Getting started

### Requirements

- Node.js 22.12.0 or newer
- Yarn 1.x

Install the dependencies:

```sh
yarn install
```

Start Astro's development server in the background:

```sh
yarn astro dev --background
```

The site is available at [http://localhost:4321](http://localhost:4321) by default. Manage the background server with:

```sh
yarn astro dev status
yarn astro dev logs
yarn astro dev logs --follow
yarn astro dev stop
```

## Commands

| Command | Action |
| --- | --- |
| `yarn astro dev --background` | Start the local development server in the background |
| `yarn astro dev status` | Check the background server status |
| `yarn astro dev logs` | Read the background server logs |
| `yarn astro dev stop` | Stop the background server |
| `yarn build` | Create the production build in `dist/` |
| `yarn preview` | Preview the production build locally |
| `yarn astro -- --help` | Show the Astro CLI help |

## Project structure

```text
.
├── public/                  # Files copied to the site root
├── src/
│   ├── assets/              # Images and SVG artwork processed by Astro
│   ├── common/
│   │   ├── data/            # Portfolio project data
│   │   └── types.ts         # Shared project types and enums
│   ├── components/
│   │   ├── common/          # Shared retro UI decorations
│   │   ├── contact/         # Contact page sections
│   │   ├── cv/              # Profile and skills sections
│   │   └── portfolio/       # Project collection and card components
│   ├── layouts/             # Shared page shell, navigation, and footer
│   ├── pages/               # File-based routes
│   └── styles/global.css    # Tailwind import, theme tokens, and site styles
├── astro.config.mjs
└── package.json
```

## Updating the portfolio

Open-source projects are defined in [`src/common/data/opensource.json`](src/common/data/opensource.json). Each entry follows the `OpenSourceProject` type in [`src/common/types.ts`](src/common/types.ts).

- Set `highlighted` to `true` to show a project in the featured collections.
- Use `status` and `role` values declared in the shared enums.
- Add repository, package, documentation, website, or DEV links when available; project cards only render links with a value.
- Keep `startDate` and the optional `endDate` numeric. Projects without an end date are displayed as ongoing.

Profile copy and skills live in `src/components/cv/`, while the shared visual system and responsive styles live in `src/styles/global.css`.

## License

This project is available under the [MIT License](LICENSE).
