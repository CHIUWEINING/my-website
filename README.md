# My GitHub Pages — React Site

A clean, minimal personal homepage built with React.

## Project Structure

```
src/
├── data.js              ← ✏️ EDIT THIS — all your content lives here
├── index.js             ← React entry point (don't touch)
├── App.jsx              ← Router setup (don't touch)
├── index.css            ← CSS variables & reset (don't touch)
├── components.css       ← Shared component styles
├── components/
│   └── Nav.jsx          ← Sticky navigation bar
└── pages/
    ├── Home.jsx         ← Main page (bio, photo, pubs, experience)
    └── Publications.jsx ← Full publications detail page
```

## Setup & Deploy

### 1. Install dependencies
```bash
npm install
```

### 2. Edit your content
Open `src/data.js` and fill in:
- Your name, bio, tagline
- Contact links (LinkedIn, email, GitHub, Scholar)
- Your publications (title, authors, tags, summary, links)
- Your work experience

### 3. Add your photo
1. Drop your photo into `src/assets/photo.jpg`
2. Open `src/data.js`
3. At the top, add: `import photo from './assets/photo.jpg'`
4. Change `photo: null` to `photo: photo`

### 4. Add publication teaser images
1. Drop images into `src/assets/` (e.g. `pub1.png`)
2. In `src/data.js`, import each image:
   ```js
   import pub1 from './assets/pub1.png'
   ```
3. Set `image: pub1` in the relevant publication object

### 5. Run locally
```bash
npm start
```
Visit http://localhost:3000 to preview.

### 6. Deploy to GitHub Pages
1. In `package.json`, replace `YOUR_GITHUB_USERNAME` in the `homepage` field
2. Install gh-pages: `npm install gh-pages --save-dev`
3. Run: `npm run deploy`
4. Go to your repo → Settings → Pages → set source to `gh-pages` branch
5. Visit `https://YOUR_USERNAME.github.io` 🎉
