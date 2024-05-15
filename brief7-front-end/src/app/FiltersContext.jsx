"use client";

import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersContextProvider({ children }) {
  const [filters, setFilters] = useState({
    destination: "",
    category: "",
    startDate: "",
    endDate: "",
  });

  const updateDestinationFilter = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      destination: value,
    }));
    console.log(filters);
  };

  const updateCategoryFilter = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: value,
    }));
    console.log(filters);
  };

  const updateStartDateFilter = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      startDate: value,
    }));
    console.log(filters);
  };

  const updateEndDateFilter = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      endDate: value,
    }));
    console.log(filters);
  };

  const contextValues = {
    filters,
    updateDestinationFilter,
    updateCategoryFilter,
    updateStartDateFilter,
    updateEndDateFilter,
  };

  return <FiltersContext.Provider value={contextValues}>{children}</FiltersContext.Provider>;
}
