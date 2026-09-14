import React from "react";
import type { Todos } from "../../types";

interface TodoContextType {
    todoList: Todos[],
    addTodo: (item: Todos) => void,
    EditTodo: (id: string, item: Todos) => void,
    DeletetTodo: (id: string) => void,
    handleComplete: (id: string) => void
}


export const TodoContext = React.createContext<TodoContextType | undefined>(undefined);