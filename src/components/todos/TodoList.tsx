import { useTodo } from "../../context/todos/useTodo";
import { useMemo } from "react";
import TodoItem from "./TodoItem";




function TodoList() {
    const { todoList, clearCompleted } = useTodo()

    const { completedCount, uncompletedCount } = useMemo(() => {
        return todoList.reduce(
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
    }, [todoList]);


    return <div>
        <ul className="mt-6 space-y-3 h-112.5 overflow-y-auto overflow-x-hidden pr-2">
            {
                todoList.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />
                }).reverse()
            }
        </ul>
        <div className="flex justify-between py-3 border-t border-border mt-5">
            <p>
                <span className="font-bold">{uncompletedCount}</span> items left</p>

            {completedCount > 0 &&
                <button
                    onClick={clearCompleted}
                    className="hover:text-blue-500 hover:underline 
                    decoration-blue-500-">
                    Clear Completed {completedCount}</button>
            }
        </div>
    </div>
}

export default TodoList;