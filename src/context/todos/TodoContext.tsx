import React from "react";
import type { Todos } from "../../types";

interface TodoContextType {
    todoList: Todos[],
    addTodo: (item: Todos) => void,
    editTodo: (item: Todos) => void,
    deleteTodo: (item: string) => void,
    toggleTodo: (item: string) => void
    clearCompleted: () => void,
}

export const TodoContext = React.createContext<TodoContextType | undefined>(undefined);
