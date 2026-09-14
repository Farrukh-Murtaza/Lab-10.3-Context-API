import React from "react";
import type { Theme } from "../../types";

interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}


export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);
