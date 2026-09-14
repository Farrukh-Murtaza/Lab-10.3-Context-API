import { useState, useRef, useEffect } from "react";
import { Edit2, TrashIcon } from "lucide-react";
import { useTodo } from "../../context/todos";
import type { Todos } from "../../types";

interface TodoItemProps {
    todo: Todos;
}

function TodoItem({ todo }: TodoItemProps) {
    // Destructure updateTodo from your context alongside delete and toggle
    const { deleteTodo, toggleTodo, editTodo } = useTodo();

    // Track editing state and input text
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus the input field automatically when editing starts
    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    const handleSave = () => {
        setIsEditing(false);
        // Only update if the text actually changed and isn't empty
        if (editText.trim() !== "" && editText !== todo.text) {
            editTodo({ id: todo.id, text: editText.trim(), isCompleted: todo.isCompleted });
        } else {
            setEditText(todo.text); // Reset to original if empty
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSave();
        if (e.key === "Escape") {
            setIsEditing(false);
            setEditText(todo.text); // Cancel edit
        }
    };

    return (
        <li
            id={todo.id}
            className="group flex items-center gap-3 bg-white dark:bg-slate-700/60 border border-slate-100 dark:border-slate-600/60 rounded-2xl px-5 py-3.5 text-slate-700 dark:text-slate-200 shadow-sm hover:border-blue-300 dark:hover:border-blue-500/60 hover:shadow-md hover:translate-x-0.5 transition-all"
        >
            <button
                onClick={() => toggleTodo(todo)}
                aria-label={todo.isCompleted ? "Mark incomplete" : "Mark complete"}
                className={`w-5 h-5 rounded-full border-2 shrink-0 transition-colors flex items-center justify-center ${todo.isCompleted
                    ? "border-green-500 bg-green-500 dark:border-green-400 dark:bg-green-400"
                    : "border-slate-300 dark:border-slate-500 group-hover:border-blue-500"
                    }`}
            >
                {todo.isCompleted && (
                    <svg
                        className="w-3 h-3 text-white dark:text-slate-900 stroke-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        >
                        </path>
                    </svg>
                )}
            </button>

            {isEditing ? (
                <input
                    ref={inputRef}
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-b border-blue-500 text-slate-800 dark:text-slate-200 focus:outline-none py-0.5"
                />
            ) : (
                <span
                    className={`flex-1 text-slate-800 dark:text-slate-200 transition-all ${todo.isCompleted
                        ? "line-through text-slate-400 dark:text-slate-500 italic"
                        : ""
                        }`}
                >
                    {todo.text}
                </span>
            )}

            <div className="gap-2 flex">
                <button
                    onClick={() => setIsEditing(true)}
                    disabled={todo.isCompleted}
                    className="p-2 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                    <Edit2 size={18} />
                </button>
                <button
                    onClick={() => deleteTodo(todo)}
                    className="p-2 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600"
                >
                    <TrashIcon size={18} />
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
