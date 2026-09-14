import type { Todos } from "../../types";


interface TodoListProps {
    todoList: Todos[]
}

function TodoList({ todoList }: TodoListProps) {

    <ul className="mt-6 space-y-3">
        {
            todoList.map((todo) => {
                return <li id={todo.id} key={todo.id} className="group flex items-center gap-3 bg-white dark:bg-slate-700/60 border border-slate-100 dark:border-slate-600/60 rounded-2xl px-5 py-3.5 text-slate-700 dark:text-slate-200 shadow-sm hover:border-blue-300 dark:hover:border-blue-500/60 hover:shadow-md hover:translate-x-0.5 transition-all cursor-pointer">
                    <span className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-500 group-hover:border-blue-500 shrink-0 transition-colors" />
                    <span className="flex-1">{todo.text}</span>
                </li>
            })
        }
    </ul>
}

export default TodoList;