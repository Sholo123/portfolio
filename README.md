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
| YouTube video + chapters     | `video`               |
| Other projects               | `projects`            |
| Jobs / competitions          | `experience`          |
| Degrees                      | `education`           |
| Navbar items                 | `navLinks`            |

### Changing the video

In `content.js`, set `video.id` to the YouTube ID - the part after `youtu.be/`:

```js
export const video = {
  id: "3KmUOtiPlZc",                  // just the ID, nothing else
  url: "https://youtu.be/3KmUOtiPlZc",
  ...
};
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
