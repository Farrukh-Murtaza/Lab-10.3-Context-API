import { useState } from "react";
import { useTodo } from "../../context/todos/useTodo";
import { useFilter } from "../../context/filter";
import type { Todos } from "../../types";




function TodoForm() {
    const { addTodo } = useTodo();
    const { setFilter } = useFilter();
    const [todo, setTodo] = useState<string>('');


    function handlSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        if (todo === '') {
            return;
        }
        const todoArr: Todos = {
            id: `${Date.now()}`,
            text: todo.trim(),
            isCompleted: false
        }
        addTodo(todoArr)
        setTodo('');
        setFilter('all')
    }

    return <form onSubmit={handlSubmit}>
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
}

export default TodoForm;