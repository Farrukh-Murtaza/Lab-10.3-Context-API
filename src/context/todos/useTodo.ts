import { useContext } from "react"
import { TodoContext } from "../todos"



export const useTodo = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error(
            "useTheme must be used within ThemeProvider"
        );
    }

    return context;
}