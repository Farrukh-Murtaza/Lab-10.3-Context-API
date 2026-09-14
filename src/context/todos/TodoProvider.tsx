import { useState, useEffect, type ReactNode } from "react";
import { TodoContext, type FilterType } from "./TodoContext";
import type { Todos } from "../../types";

interface TodoProviderProps {
    children: ReactNode
}

const LOCAL_STORAGE_KEY = "todo-app-list";

export const TodoProvider = ({ children }: TodoProviderProps) => {

    const [currentFilter, setFilter] = useState<FilterType>("all");

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

    function deleteTodo(id: string) {
        setTodoList((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        );
    }

    function toggleTodo(id: string) {
        setTodoList((prevTodos) => prevTodos.map((todo) => todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ))
    }

    function clearCompleted() {
        setTodoList((prevTodos) =>
            prevTodos.filter((todo) => todo.isCompleted !== true)
        );
    }

    const filteredTodos = todoList.filter((todo) => {

        if (currentFilter === "active") return !todo.isCompleted;
        if (currentFilter === "completed") return todo.isCompleted;
        return true;
    }).reverse();


    return (
        <TodoContext.Provider value={{
            todoList, addTodo, editTodo, deleteTodo, toggleTodo, clearCompleted, currentFilter, filteredTodos, setFilter
        }}>
            {children}
        </TodoContext.Provider>
    );
}
