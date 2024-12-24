import { createContext, useContext, useState, ReactNode } from 'react';

interface FilterState {
  domain: string;
  viewport: string;
  imagePath: string;
  pageTitle: string;
  status: string;
  has404: string;
  kind: string;
  section: string;
  type: string;
  vertical: string;
  imageWidth: number;
}

interface FilterContextType {
  filters: FilterState;
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
}

const initialFilters: FilterState = {
  domain: 'all',
  viewport: 'all',
  imagePath: '',
  pageTitle: '',
  status: '',
  has404: 'all',
  kind: 'all',
  section: 'all',
  type: 'all',
  vertical: 'all',
  imageWidth: 50,
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<FilterState>(initialFilters);

  const setFilters = (newFilters: Partial<FilterState>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFiltersState(initialFilters);
  };

  return (
    <FilterContext.Provider value={{ filters, setFilters, resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}