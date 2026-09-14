import { useState, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import type { Todos } from "../../types";


interface TodoProviderProps {
    children: ReactNode
}


export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todoList, setTodoList] = useState<Todos[]>([]);


    function addTodo(todo: Todos) {
        setTodoList(prevValues => [...prevValues, todo]);
    }

    function EditTodo() {

    }
    function DeletetTodo(id: string) {
        console.log("dsf")

        setTodoList((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        );

    }

    function handleComplete(id: string) {

        setTodoList((prevTodos) => prevTodos.map((todo) => todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ))
    }


    return <TodoContext.Provider value={{
        todoList, addTodo, EditTodo, DeletetTodo, handleComplete
    }}>
        {children}
    </TodoContext.Provider>
}




