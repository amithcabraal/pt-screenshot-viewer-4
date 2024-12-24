import { useState, useEffect } from 'react';
import { ImageData } from '@/types';
import { mockImageData } from '@/mocks/mockImageData';

export function useImageData() {
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadImageData() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const folder = urlParams.get('folder');
        
        if (!folder) {
          // Use mock data when no folder is specified
          setImageData(mockImageData);
          return;
        }

        const response = await fetch(`${folder}/imageData.js`);
        if (!response.ok) {
          throw new Error('Failed to load image data');
        }

        const text = await response.text();
        // Remove "export const imageData = " from the beginning of the file
        const jsonText = text.replace(/^export const imageData = /, '');
        const data = JSON.parse(jsonText);
        setImageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load image data');
      } finally {
        setIsLoading(false);
      }
    }

    loadImageData();
  }, []);

  return { imageData, isLoading, error };
}