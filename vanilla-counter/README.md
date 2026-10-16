# Vanilla Counter

A counter app built with plain HTML, CSS, and JavaScript — no frameworks, no build tools, no install required.

## How to run it

Open `index.html` directly in your browser. That's it.

You can do this by:
- Double-clicking the file in Finder
- Dragging it into a browser window
- Right-clicking → Open With → Chrome (or any browser)

There is no server, no terminal command, nothing to install. The browser reads the HTML file directly from your computer.

## How it gets served

When you open a `.html` file in the browser, the browser itself acts as the viewer. It reads the file from your hard drive using the `file://` protocol (you'll see this in the address bar, e.g. `file:///Users/yourname/.../index.html`).

The HTML file links to the other files:

```html
<link rel="stylesheet" href="style.css" />  <!-- loads the styles -->
<script src="main.js"></script>              <!-- loads the JavaScript -->
```

The browser fetches each one in order and puts the page together. No server involved.

## File breakdown

| File | What it does |
|------|--------------|
| `index.html` | The structure of the page — the buttons and the count display |
| `style.css` | All the visual styling |
| `main.js` | The logic — tracks the count and updates the page when buttons are clicked |
