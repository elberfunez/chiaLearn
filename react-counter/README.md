# React Counter

The same counter app built with React and Vite. Unlike the vanilla version, this one requires a terminal and a local dev server to run.

## Requirements

- [Node.js](https://nodejs.org) installed on your machine (v18 or later)

## How to run it

```bash
# 1. Install dependencies (only need to do this once)
npm install

# 2. Start the dev server
npm run dev
```

Then open your browser to `http://localhost:5173`.

## How it gets served

Unlike the vanilla app, you can't just open `index.html` directly — React uses JSX syntax (the HTML-like code inside `.jsx` files) that browsers don't understand natively. It has to be **compiled** into plain JavaScript first.

Vite handles this for you. When you run `npm run dev`, Vite:

1. Starts a local web server on port `5173`
2. Watches your files for changes
3. Compiles your JSX into plain JavaScript on the fly
4. Serves everything through `http://localhost:5173`

Your browser talks to that local server instead of reading files directly off disk. That's why you see `http://` in the address bar instead of `file://`.

## File breakdown

| File | What it does |
|------|--------------|
| `index.html` | The entry point — has a single `<div id="root">` where React mounts |
| `src/main.jsx` | Bootstraps React — tells it to render `<App />` inside `#root` |
| `src/App.jsx` | The counter component — holds state and renders the UI |
| `src/App.css` | Styles scoped to the App component |
| `src/index.css` | Global styles |
| `package.json` | Lists dependencies and the `npm run dev` script |
| `vite.config.js` | Vite configuration |
