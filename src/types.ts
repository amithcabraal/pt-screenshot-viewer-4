export interface ImageMetadata {
  gameId?: string;
  kind?: string;
  name?: string;
  vertical?: string;
  pageName?: string;
  section?: string;
  type?: string;
}

export interface ImageData {
  '404': boolean;
  imagePath: string;
  url: string;
  domain: string;
  pageTitle: string;
  viewport: string;
  statusCode: number;
  metadata: ImageMetadata;
}