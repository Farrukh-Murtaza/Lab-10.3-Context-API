import React from "react";

export type FilterType = "all" | "active" | "completed";

interface FilterContextType {
    currentFilter: FilterType,
    setFilter: (filter: FilterType) => void;
}

export const FilterContext = React.createContext<FilterContextType | undefined>(undefined);
