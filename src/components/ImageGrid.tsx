import { useFilters } from '@/context/FilterContext';
import { useImageData } from '@/hooks/useImageData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

export function ImageGrid() {
  const { filters } = useFilters();
  const { imageData } = useImageData();

  const filteredData = imageData.filter(item => {
    const imagePathPattern = new RegExp(filters.imagePath.replaceAll(/[\&\/\?]/g,'_'), 'i');
    const pageTitlePattern = new RegExp(filters.pageTitle, 'i');

    return (
      (filters.domain === 'all' || filters.domain === item.domain) &&
      imagePathPattern.test(item.url) &&
      (!filters.status || filters.status === item.statusCode?.toString()) &&
      pageTitlePattern.test(item.pageTitle) &&
      (filters.has404 === 'all' || filters.has404 === item['404'].toString()) &&
      (filters.viewport === 'all' || filters.viewport === item.viewport) &&
      (filters.section === 'all' || filters.section === item?.metadata?.section) &&
      (filters.type === 'all' || filters.type === item?.metadata?.type) &&
      (filters.vertical === 'all' || filters.vertical === item?.metadata?.vertical) &&
      (filters.kind === 'all' || filters.kind === item?.metadata?.kind)
    );
  });

  return (
    <div className="flex gap-4 p-4" style={{ width: 'max-content' }}>
      {filteredData.map((item, index) => (
        <Card key={index} className="shrink-0" style={{ width: `${filters.imageWidth}vw` }}>
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm truncate">
                {(item.pageTitle || item.url).split("|")[0]}
              </CardTitle>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-2">
                    <p><strong>URL:</strong> <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">{item.url}</a></p>
                    <p><strong>Status:</strong> {item.statusCode}</p>
                    <p><strong>Viewport:</strong> {item.viewport}</p>
                    {item.metadata && (
                      <>
                        <p><strong>Kind:</strong> {item.metadata.kind}</p>
                        <p><strong>Section:</strong> {item.metadata.section}</p>
                        <p><strong>Type:</strong> {item.metadata.type}</p>
                        <p><strong>Vertical:</strong> {item.metadata.vertical}</p>
                      </>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <img
              src={item.imagePath}
              alt={item.pageTitle}
              className="w-full rounded-b-lg object-cover"
              loading="lazy"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}