import { TooltipProvider } from '@/components/ui/tooltip';
import { FilterProvider } from '@/context/FilterContext';
import { ThemeProvider } from '@/context/theme';
import { Layout } from '@/components/Layout';
import { useImageData } from '@/hooks/useImageData';

export default function App() {
  const { isLoading, error } = useImageData();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="screenshot-browser-theme">
      <FilterProvider>
        <TooltipProvider>
          <Layout />
        </TooltipProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}