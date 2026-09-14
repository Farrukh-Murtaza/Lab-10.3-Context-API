import { useEffect, useState, type ReactNode } from "react"
import { ThemeContext } from "./ThemeContext"
import type { Theme } from "../../types";



interface ThemeProviderProps {
    children: ReactNode
}


export const ThemeProvider = ({
    children,
}: ThemeProviderProps) => {

    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "light" || stored === "dark") return stored;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }


    return (<ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>)

}