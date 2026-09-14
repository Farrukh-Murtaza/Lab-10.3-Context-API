import { Edit2, TrashIcon } from "lucide-react";
import { useTodo } from "../../context/todos/useTodo";




function TodoList() {
    const { todoList, DeletetTodo, handleComplete } = useTodo()


    return <ul className="mt-6 space-y-3">
        {
            todoList.map((todo) => {
                return <li id={todo.id} key={todo.id} className="group flex items-center gap-3 bg-white dark:bg-slate-700/60 border border-slate-100 dark:border-slate-600/60 rounded-2xl px-5 py-3.5 text-slate-700 dark:text-slate-200 shadow-sm hover:border-blue-300 dark:hover:border-blue-500/60 hover:shadow-md hover:translate-x-0.5 transition-all cursor-pointer">
                    <span
                        onClick={() => handleComplete(todo.id)}
                        className={`w-5 h-5 rounded-full border-2 shrink-0 transition-colors cursor-pointer
                            ${todo.isCompleted
                                ? 'border-green-500 bg-green-500 dark:border-green-400 dark:bg-green-400'
                                : 'border-slate-300 dark:border-slate-500 group-hover:border-blue-500'
                            }`}
                    />
                    <span className={`flex-1 text-slate-800 dark:text-slate-200 transition-all
                        ${todo.isCompleted
                            ? 'line-through text-slate-400 dark:text-slate-500 italic'
                            : ''
                        }`}
                    >
                        {todo.text}
                    </span>

                    <div className="gap-2 flex">
                        <button

                            className="p-2 rounded-full
                             hover:bg-slate-300">
                            <Edit2 size={18} />
                        </button>

                        <button
                            onClick={() => DeletetTodo(todo.id)}
                            className="p-2 rounded-full
                             hover:bg-slate-300">
                            <TrashIcon size={18} />
                        </button>
                    </div>
                </li>
            })
        }
    </ul>
}

export default TodoList;