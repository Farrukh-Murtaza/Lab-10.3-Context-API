import { useState, type ReactNode } from "react";
import { FilterContext, type FilterType } from "./FilterContext";

interface FilterProviderProps {
    children: ReactNode
}

export const FilterProvider = ({ children }: FilterProviderProps) => {

    const [currentFilter, setFilter] = useState<FilterType>("all");

    return (
        <FilterContext.Provider value={{ currentFilter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}
