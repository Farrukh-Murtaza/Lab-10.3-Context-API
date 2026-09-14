import React from "react";
import type { Todos } from "../../types";

export type FilterType = "all" | "active" | "completed";

interface TodoContextType {
    todoList: Todos[],
    filteredTodos: Todos[],
    currentFilter: FilterType,
    addTodo: (item: Todos) => void,
    editTodo: (item: Todos) => void,
    deleteTodo: (item: string) => void,
    toggleTodo: (item: string) => void
    clearCompleted: () => void,
    setFilter: (filter: FilterType) => void;
}


export const TodoContext = React.createContext<TodoContextType | undefined>(undefined);