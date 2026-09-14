import React, { useState } from 'react';
import type { Todos } from './types';
import ThemeButton from './components/todos/ThemeButton';

function App() {

  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<Todos[]>([]);

  function handlSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const todoArr: Todos = {
      id: `${Date.now()}`,
      text: todo,
      isCompleted: false

    }
    setTodoList((prev) => [...prev, todoArr])
    console.log(todoList);
  }

  return (
    <div className=''>
      <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="w-full max-w-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 dark:border-slate-700 shadow-2xl shadow-slate-300/50 dark:shadow-black/40 transition-colors duration-300">

          {/* Header */}
          <header className="flex items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span className="text-3xl">📋</span>
              <span>
                Todo App{' '}
                <span className="text-sm font-normal text-slate-400 dark:text-slate-500 ml-1">
                  (Context API)
                </span>
              </span>
            </h1>
            <ThemeButton />

          </header>

          {/* Divider */}
          <hr className="my-6 border-0 h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />

          <main>
            {/* Form */}
            <form onSubmit={handlSubmit}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  className="flex-1 border border-slate-200 dark:border-slate-600 bg-white/90 dark:bg-slate-700/90 px-5 py-3 rounded-2xl text-slate-700 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 transition-all"
                  id="todo"
                  type="text"
                  name="todo"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  placeholder="What needs to be done?"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-linear-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 active:shadow-blue-500/30 transition-all whitespace-nowrap"
                >
                  <span className="mr-1.5">＋</span>Add ToDo
                </button>
              </div>
            </form>

            {/* Filters */}
            <ul className="flex flex-wrap gap-3 justify-center mt-8">
              <li>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  Active
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  Filter
                </button>
              </li>
            </ul>

            {/* Todo list */}

          </main>

          {/* Footer flourish */}
          <div className="mt-8 text-center text-xs text-slate-300 dark:text-slate-600 select-none">
            ✨ pretty version ✨
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;