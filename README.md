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

State is split into three independent contexts, each owning a single concern, so that a change in one (e.g. toggling the theme) doesn't trigger re-renders in components that only care about another (e.g. the todo list):

```
src/
├── context/
│   ├── todos/
│   │   ├── TodoContext.tsx      # Context definition + types (todo data + CRUD only)
│   │   ├── TodoProvider.tsx     # State, CRUD logic, localStorage sync
│   │   └── useTodo.ts           # Consumer hook with guard
│   ├── filter/
│   │   ├── FilterContext.ts     # Context definition + FilterType
│   │   ├── FilterProvider.tsx   # currentFilter state ("all" | "active" | "completed")
│   │   └── useFilter.ts         # Consumer hook with guard
│   └── theme/
│       ├── ThemeContext.ts
│       ├── themeProvider.tsx    # Theme state + localStorage + system preference
│       └── useTheme.ts
├── components/
│   └── todos/
│       ├── TodoForm.tsx         # Add new todos; resets filter to "all" on add
│       ├── TodoList.tsx         # Combines TodoContext + FilterContext to render the filtered list + item counts
│       ├── TodoItem.tsx         # Single todo row (edit/delete/toggle)
│       ├── TodoFilter.tsx       # All / Active / Completed controls, backed by FilterContext
│       └── ThemeButton.tsx      # Light/dark toggle
├── types/
│   └── index.ts                 # Shared `Todos` and `Theme` types
├── App.tsx
└── main.tsx
```

`TodoContext` is intentionally scoped to todo data and CRUD actions only — it has no knowledge of filtering. `FilterContext` owns the active filter in isolation. `TodoList` is the one place the two are composed: it reads `todoList` from `useTodo()` and `currentFilter` from `useFilter()`, and derives the visible list and item counts from both.

`useTodo()`, `useFilter()`, and `useTheme()` each throw a descriptive error if called outside their respective providers, which catches misuse early during development rather than failing silently with `undefined`.

Provider nesting order in `main.tsx`:

```tsx
<ThemeProvider>
  <TodoProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </TodoProvider>
</ThemeProvider>
```

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


