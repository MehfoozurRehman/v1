# Portfolio (v1)

The first version of a personal developer portfolio: a single static page with an intro, project screenshots, social links and a contact form.

**Status:** Working demo. It is a complete static page that builds with Parcel and has a Firebase Hosting deploy script, but the repo records no live URL, has no tests, and the contact form only opens a `mailto:` link.

## The problem

A developer needs one page that introduces them, shows past work and gives visitors a way to get in touch. This version was built without a framework to cover that.

## What it does

- Intro section with a navigation menu that collapses on small screens (`src/js/script.js`).
- Project gallery with screenshots, including a to-do list PWA, a portfolio site and a second project (`src/assets/`).
- A row of software icons (Photoshop, Illustrator, XD, Bootstrap, HTML5, CSS3, JavaScript, PHP and others) and links to GitHub, Facebook and Twitter.
- Contact form in `src/index.html` that opens the visitor's mail client with `mailto:`.

## How it's built

- Plain HTML, SCSS (`src/css/main.scss`) and vanilla JavaScript. There is no framework.
- Parcel 2 bundles the site. The entry point is `src/index.html` and the build output goes to `build/`.
- Firebase Hosting is configured through `firebase.json` and `.firebaserc`. The `deploy` script builds and then runs `firebase deploy`.
- Google Fonts is loaded from the stylesheet link, and Font Awesome files are bundled in `public/fonts/`.

## Running it locally

```bash
pnpm install
pnpm dev      # Parcel dev server
pnpm build    # output to build/
```

Other scripts: `pnpm deploy` (build, then Firebase deploy) and `pnpm format` (Prettier).

## What's left

- The contact form uses `mailto:` and cannot send messages from the site itself.
- Projects and icons are hard-coded in the HTML rather than kept in a data file.
- No tests and no lint or accessibility checks beyond Prettier.
- No live URL is recorded in the repo.
