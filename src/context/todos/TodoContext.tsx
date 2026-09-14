import React from "react";
import type { Todos } from "../../types";

interface TodoContextType {
    todoList: Todos[],
    addTodo: (item: Todos) => void,
    editTodo: (item: Todos) => void,
    deleteTodo: (item: Todos) => void,
    toggleTodo: (item: Todos) => void
    clearCompleted: () => void
}


export const TodoContext = React.createContext<TodoContextType | undefined>(undefined);