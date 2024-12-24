import { useFilters } from '@/context/FilterContext';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

export function ImageWidthControl() {
  const { filters, setFilters } = useFilters();

  return (
    <div className="flex items-center gap-4">
      <Label className="whitespace-nowrap">Image Width: {filters.imageWidth}%</Label>
      <Slider
        className="w-[200px]"
        value={[filters.imageWidth]}
        onValueChange={([value]) => setFilters({ imageWidth: value })}
        min={20}
        max={100}
        step={5}
      />
    </div>
  );
}