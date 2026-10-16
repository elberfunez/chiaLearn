# Frontend Dev — Learning Guide

This repo has two versions of the same app: a simple counter with +, -, and Reset buttons.

One is built with **vanilla JavaScript**. The other is built with **React**.

The goal is to understand what React is actually doing for you by seeing the same problem solved both ways.

---

## Step 1 — Run the vanilla app first

Go into `vanilla-counter/` and open `index.html` in your browser. No terminal needed.

You should see a counter with three buttons. Try clicking them.

**What's happening:** The browser reads the HTML file directly off your hard drive. It loads the CSS and JavaScript the same way you'd load any file. Nothing is running in the background.

---

## Step 2 — Read the vanilla JavaScript

Open `vanilla-counter/main.js`. It's about 20 lines. Here's the full logic:

```js
let count = 0;                          // 1. a variable holds the current count

function render() {
  countEl.textContent = count;          // 2. this function updates what's on screen
}

incrementBtn.addEventListener('click', function () {
  count = count + 1;                    // 3. when + is clicked, update the variable...
  render();                             //    ...then manually call render()
});
```

**The core pattern:**
1. Store state in a variable
2. Listen for events (clicks)
3. Update the variable
4. Manually update the DOM to reflect the new value

Every time something changes, *you* are responsible for updating the page. That's what `render()` is — a function you wrote and have to call yourself.

---

## Step 3 — Run the React app

Open a terminal, navigate to `react-counter/`, and run:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. Same app, same buttons.

**What's different about running it:** You needed a terminal. The app isn't served from a file on disk — it's served by a local web server (Vite) running on your machine. Your browser is making an HTTP request to `localhost`, the same way it would to a real website.

---

## Step 4 — Read the React code

Open `react-counter/src/App.jsx`. Here's the core:

```jsx
function App() {
  const [count, setCount] = useState(0)   // 1. state lives here, same idea as let count = 0

  return (
    <div>
      <p>{count}</p>                        // 2. the UI reads directly from state
      <button onClick={() => setCount(count + 1)}>+</button>  // 3. clicking calls setCount
    </div>
  )
}
```

**The core pattern:**
1. `useState(0)` creates the variable and a function to update it
2. The UI is written as JSX — it looks like HTML but it's JavaScript
3. When you call `setCount`, React automatically re-renders the component

**What React does for you:** You never call `render()` yourself. You never touch `document.getElementById`. You just say "the count is `{count}`" and React keeps the screen in sync with the value. When the value changes, the screen updates.

---

## Side-by-side comparison

| | Vanilla JS | React |
|---|---|---|
| How to run | Open the HTML file | `npm run dev` then open localhost |
| State | `let count = 0` | `const [count, setCount] = useState(0)` |
| Update state | `count = count + 1` | `setCount(count + 1)` |
| Update the screen | Call `render()` manually | Happens automatically |
| HTML | Written in `.html` file | Written as JSX inside `.jsx` file |
| File the browser loads | `index.html` directly | `localhost:5173` via a dev server |

---

## The big idea

Vanilla JavaScript gives you full control but you have to manage everything yourself. As apps get bigger — more buttons, more data, more things on screen — manually keeping the DOM in sync with your data becomes the hard part.

React solves that one problem: **you describe what the UI should look like given the current state, and React handles keeping them in sync.**

Everything else React does (components, props, hooks) builds on top of that idea.

---

## Folders

```
chiaLearn/
├── README.md               ← you are here
├── vanilla-counter/        ← plain HTML, CSS, JS
└── react-counter/          ← React + Vite
```
