# Todo App (React + Context API)

A lightweight, fully client-side todo application built to demonstrate idiomatic use of React's Context API for global state management — no Redux, no external state libraries, just Providers, hooks, and `localStorage`.

![Light theme](/public/screenshots/todo-light-theme.png)

## Features

- **Create, edit, and delete todos** — inline editing with save-on-blur, `Enter` to confirm, `Escape` to cancel
- **Toggle completion** with a single click
- **Filter by status** — All / Active / Completed
- **Bulk clear** completed items
- **Persistent storage** — todo list survives page reloads via `localStorage`
- **Dark mode** — respects system preference on first load, manual toggle persists across sessions
- **Responsive UI** styled with Tailwind CSS

## Tech Stack

| Layer          | Choice                          |
|----------------|----------------------------------|
| Framework      | React 18 (function components + hooks) |
| Language       | TypeScript                      |
| Build tool     | Vite                             |
| Styling        | Tailwind CSS v4                  |
| Icons          | lucide-react                     |
| State          | React Context API (no external state library) |
| Persistence    | Browser `localStorage`           |

## Architecture

State is split into two independent contexts so that theme changes don't trigger todo re-renders and vice versa:

```
src/
├── context/
│   ├── todos/
│   │   ├── TodoContext.tsx      # Context definition + types
│   │   ├── TodoProvider.tsx     # State, CRUD logic, localStorage sync
│   │   └── useTodo.ts           # Consumer hook with guard
│   └── theme/
│       ├── ThemeContext.ts
│       ├── themeProvider.tsx    # Theme state + localStorage + system preference
│       └── useTheme.ts
├── components/
│   └── todos/
│       ├── TodoForm.tsx         # Add new todos
│       ├── TodoList.tsx         # Renders filtered list + item counts
│       ├── TodoItem.tsx         # Single todo row (edit/delete/toggle)
│       ├── TodoFilter.tsx       # All / Active / Completed controls
│       └── ThemeButton.tsx      # Light/dark toggle
├── types/
│   └── index.ts                 # Shared `Todos` and `Theme` types
├── App.tsx
└── main.tsx
```

Both `useTodo()` and `useTheme()` throw a descriptive error if called outside their respective providers, which catches misuse early during development rather than failing silently with `undefined`.

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
git clone https://github.com/Farrukh-Murtaza/Lab-10.3-Context-API.git
cd Lab-10.3-Context-API
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
npm run preview
```

## Screenshots

| All Todos | Dark Theme | Editing |
|---|---|---|
| ![All todos](/public/screenshots/all-todos.png) | ![Dark theme](/public/screenshots/todo-dark-theme.png) | ![Editing a todo](/public/screenshots/editing-todo.png) |

| Active | Completed | Marking Complete |
|---|---|---|
| ![Active todos](/public/screenshots/active-todos.png) | ![Completed todos](/public/screenshots/completed-todos.png) | ![Marking complete](/public/screenshots/mark-completed-todos.png) |

## Notes & Possible Improvements

- Todo IDs are generated with `Date.now()`, which is fine for this scale but would benefit from `crypto.randomUUID()` in a production setting to avoid collision risk on rapid successive adds.
- State currently lives entirely in `localStorage`; swapping the provider's persistence layer for an API/database would be a drop-in change since components only depend on the `useTodo()` interface.
- No test suite is currently included — `TodoProvider`'s reducer-like functions (`addTodo`, `editTodo`, `toggleTodo`, `clearCompleted`) are pure and would be straightforward to unit test in isolation.

