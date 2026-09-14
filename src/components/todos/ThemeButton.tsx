import { useTheme } from "../../context/theme/useTheme";

function ThemeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-all active:scale-95"
            aria-label="Switch to dark mode"
        >
            {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
        </button>
    );

}

export default ThemeButton;