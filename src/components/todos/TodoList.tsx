import { useTodo } from "../../context/todos/useTodo";
import { useFilter } from "../../context/filter";
import { useMemo } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todoList, clearCompleted } = useTodo();
    const { currentFilter } = useFilter();

    const { filteredTodos, completedCount, uncompletedCount } = useMemo(() => {
        const filtered = todoList
            .filter((todo) => {
                if (currentFilter === "active") return !todo.isCompleted;
                if (currentFilter === "completed") return todo.isCompleted;
                return true;
            })
            .slice()
            .reverse();

        const counts = todoList.reduce(
            (acc, todo) => {
                if (todo.isCompleted) {
                    acc.completedCount += 1;
                } else {
                    acc.uncompletedCount += 1;
                }
                return acc;
            },
            { completedCount: 0, uncompletedCount: 0 }
        );

        return { filteredTodos: filtered, ...counts };
    }, [todoList, currentFilter]);

    return (
        <div>
            {/* Switched to h-[450px] to ensure native Tailwind compatibility */}
            <ul className="mt-6 space-y-3 h-112.5 overflow-y-auto overflow-x-hidden pr-2">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                })}
            </ul>

            <div className="flex justify-between py-3 border-t border-border mt-5">
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{uncompletedCount}</span> {uncompletedCount === 1 ? 'item' : 'items'} left
                </p>

                {completedCount > 0 && (
                    <button
                        onClick={clearCompleted}
                        className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:underline transition-colors"
                    >
                        Clear Completed ({completedCount})
                    </button>
                )}
            </div>
        </div>
    );
}

export default TodoList;
