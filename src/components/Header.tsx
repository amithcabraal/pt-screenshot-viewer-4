import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FilterSidebar } from './FilterSidebar';
import { ThemeToggle } from './ThemeToggle';
import { ImageWidthControl } from './ImageWidthControl';

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <FilterSidebar />
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold">Screenshot Browser</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <ImageWidthControl />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}