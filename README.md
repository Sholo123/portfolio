# Sholo Ramatshego - Portfolio

Personal portfolio site. React 19 + Vite + Tailwind CSS + Framer Motion.

## Running it

From the `portfolio` folder:

```bash
npm install     # only needed the first time, or after pulling new changes
npm run dev     # start the dev server on http://localhost:5173
```

Press `Ctrl + C` in the terminal to stop it.

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Editing the content

Almost everything on the site comes from **`src/data/content.js`**. Change it there
and every section updates - you rarely need to touch the components.

| What                         | Where in `content.js` |
| ---------------------------- | --------------------- |
| Name, contact details, links | `profile`             |
| Hero number strip            | `stats`               |
| Skills (grouped)             | `skillGroups`         |
| KubernetesSentinel section   | `flagship`            |
| Walkthrough videos           | `videos`              |
| Other projects               | `projects`            |
| Jobs / competitions          | `experience`          |
| Degrees                      | `education`           |
| Navbar items                 | `navLinks`            |

### Changing the video

In `content.js`, each entry in `videos` has an `id` field, which is the YouTube ID - the part after `youtu.be/` or `watch?v=`:

```js
export const videos = [
  {
    id: "3KmUOtiPlZc",                // just the ID, nothing else
    slug: "sentinel",                 // used by #video-sentinel links
    tab: "KubernetesSentinel",        // label on the switcher button
    ...
  },
];
```

The thumbnail is pulled from YouTube automatically, and the player only loads
once someone clicks play.

### Replacing the CV

Drop the new PDF in `public/` as `Sholo_Ramatshego_CV.pdf` (or change the
`profile.cv` path in `content.js`).

## Structure

```
src/
├── data/content.js        all site content
├── components/            Navbar, Footer, Section, Reveal, Icon
└── sections/              Hero, About, Skills, Flagship, Video,
                           Projects, Experience, Contact
```
