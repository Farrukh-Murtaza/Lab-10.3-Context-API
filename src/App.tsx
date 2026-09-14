import ThemeButton from './components/todos/ThemeButton';
import TodoFilter from './components/todos/TodoFilter';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';
import { useTodo } from './context/todos';

function App() {
  const { todoList } = useTodo()
  return (

    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 dark:border-slate-700 shadow-2xl shadow-slate-300/50 dark:shadow-black/40 transition-colors duration-300">

        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="text-3xl">📋</span>
            <span>
              Todo App
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


          {/* Todo Form */}
          <TodoForm />
          {/* Todo Filter */}
          <TodoFilter />
          {/* Todo list */}
          {todoList.length === 0
            ? <div className="mt-8 text-center text-md italic text-slate-300 dark:text-slate-600 select-none">
              No todos yet! Add one above.
            </div>
            : <TodoList />
          }


        </main>

        {/* Footer flourish */}
        <div className="mt-8 text-center text-xs text-slate-300 dark:text-slate-600 select-none ">
          <a href="https://github.com/Farrukh-Murtaza/Lab-10.3-Context-API">
            <img className='w-12 h-12 inline-block' src="/public/GitHub_1.svg" />
            <span className='block'>Farrukh-Murtaza/Lab-10.3-Context-API</span>
          </a>
        </div>
      </div>
    </div >
  );
}

export default App;