import { useFilters } from '@/context/FilterContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useImageData } from '@/hooks/useImageData';

export function FilterSidebar() {
  const { filters, setFilters, resetFilters } = useFilters();
  const { imageData } = useImageData();

  const domains = [...new Set(imageData.map(item => item.domain))];
  const viewports = [...new Set(imageData.map(item => item.viewport))];
  const kinds = [...new Set(imageData.map(item => item?.metadata?.kind))].filter(Boolean);
  const sections = [...new Set(imageData.map(item => item?.metadata?.section))].filter(Boolean);
  const types = [...new Set(imageData.map(item => item?.metadata?.type))].filter(Boolean);
  const verticals = [...new Set(imageData.map(item => item?.metadata?.vertical))].filter(Boolean);

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Domain</Label>
          <Select value={filters.domain} onValueChange={(value) => setFilters({ domain: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All Domains" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Domains</SelectItem>
              {domains.map((domain) => (
                <SelectItem key={domain} value={domain}>{domain}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Viewport</Label>
          <Select value={filters.viewport} onValueChange={(value) => setFilters({ viewport: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All Viewports" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Viewports</SelectItem>
              {viewports.map((viewport) => (
                <SelectItem key={viewport} value={viewport}>{viewport}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Image Path</Label>
          <Input
            value={filters.imagePath}
            onChange={(e) => setFilters({ imagePath: e.target.value })}
            placeholder="Filter by path..."
          />
        </div>

        <div className="space-y-2">
          <Label>Page Title</Label>
          <Input
            value={filters.pageTitle}
            onChange={(e) => setFilters({ pageTitle: e.target.value })}
            placeholder="Filter by title..."
          />
        </div>

        <div className="space-y-2">
          <Label>Status Code</Label>
          <Input
            value={filters.status}
            onChange={(e) => setFilters({ status: e.target.value })}
            placeholder="e.g. 200"
          />
        </div>

        <div className="space-y-2">
          <Label>404 Status</Label>
          <Select value={filters.has404} onValueChange={(value) => setFilters({ has404: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4">
          <Button onClick={resetFilters} variant="outline" className="w-full">
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
}