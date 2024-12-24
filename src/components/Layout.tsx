import { useState, useEffect } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { ImageGrid } from './ImageGrid';
import { Header } from './Header';

export function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && (
          <aside className="w-[300px] border-r shrink-0">
            <div className="h-full overflow-y-auto">
              <FilterSidebar />
            </div>
          </aside>
        )}
        
        <main className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 overflow-x-auto">
            <ImageGrid />
          </div>
        </main>
      </div>
    </div>
  );
}