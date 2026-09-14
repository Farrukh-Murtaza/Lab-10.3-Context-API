


function TodoFilter() {



    return (
        /* Filters */
        <ul className="flex flex-wrap gap-3 justify-center mt-8" >
            <li>
                <button
                    type="button"
                    className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                    All
                </button>
            </li>
            <li>
                <button
                    type="button"
                    className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                    Active
                </button>
            </li>
            <li>
                <button
                    type="button"
                    className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                    Filter
                </button>
            </li>
        </ul>)
}

export default TodoFilter;