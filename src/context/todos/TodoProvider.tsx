import { useState, useEffect, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import type { Todos } from "../../types";

interface TodoProviderProps {
    children: ReactNode
}

const LOCAL_STORAGE_KEY = "todo-app-list";

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todoList, setTodoList] = useState<Todos[]>(() => {
        try {
            const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
            return savedTodos ? JSON.parse(savedTodos) : [];
        } catch (error) {
            console.error("Failed to parse todos from localStorage:", error);
            return [];
        }
    });

    // 2. Automatically sync state to localStorage whenever todoList changes
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    }, [todoList]);

    function addTodo(todo: Todos) {
        setTodoList(prevValues => [...prevValues, todo]);
    }

    function editTodo(item: Todos) {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) => (todo.id === item.id ? { ...todo, ...item } : todo))
        );
    }

    function deleteTodo(item: Todos) {
        setTodoList((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== item.id)
        );
    }

    function toggleTodo(item: Todos) {
        setTodoList((prevTodos) => prevTodos.map((todo) => todo.id === item.id
            ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ))
    }

    function clearCompleted() {
        setTodoList((prevTodos) =>
            prevTodos.filter((todo) => todo.isCompleted !== true)
        );
    }

    return (
        <TodoContext.Provider value={{
            todoList, addTodo, editTodo, deleteTodo, toggleTodo, clearCompleted
        }}>
            {children}
        </TodoContext.Provider>
    );
}
