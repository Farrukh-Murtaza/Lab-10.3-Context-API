import { useTodo } from "../../context/todos";

// Define the filter types based on what your application handles
type FilterType = "all" | "active" | "completed";

function TodoFilter() {
    // Destructure current filter and the function to change it from your context
    const { currentFilter, setFilter } = useTodo();

    // Define the filter options for looping
    const filters: { label: string; value: FilterType }[] = [
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Completed", value: "completed" },
    ];

    return (
        <ul className="flex flex-wrap gap-3 justify-center mt-8">
            {filters.map((filter) => {
                const isActive = currentFilter === filter.value;

                return (
                    <li key={filter.value}>
                        <button
                            type="button"
                            onClick={() => setFilter(filter.value)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 ${isActive
                                ? "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600"
                                : "bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500"
                                }`}
                        >
                            {filter.label}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoFilter;
