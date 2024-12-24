import { ImageData } from '@/types';

export const mockImageData: ImageData[] = [
  {
    "404": false,
    "imagePath": "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop",
    "url": "https://example.com/",
    "domain": "example.com",
    "pageTitle": "Homepage | Example",
    "viewport": "desktop",
    "statusCode": 200,
    "metadata": {
      "kind": "page",
      "name": "Home",
      "vertical": "main",
      "pageName": "Home",
      "section": "home",
      "type": "landing"
    }
  },
  {
    "404": false,
    "imagePath": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
    "url": "https://example.com/about",
    "domain": "example.com",
    "pageTitle": "About Us | Example",
    "viewport": "mobile",
    "statusCode": 200,
    "metadata": {
      "kind": "page",
      "name": "About",
      "vertical": "company",
      "pageName": "About",
      "section": "company",
      "type": "info"
    }
  },
  {
    "404": false,
    "imagePath": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    "url": "https://blog.example.com/",
    "domain": "blog.example.com",
    "pageTitle": "Blog | Example",
    "viewport": "tablet",
    "statusCode": 200,
    "metadata": {
      "kind": "listing",
      "name": "Blog",
      "vertical": "content",
      "pageName": "Blog",
      "section": "blog",
      "type": "listing"
    }
  },
  {
    "404": true,
    "imagePath": "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&auto=format&fit=crop",
    "url": "https://example.com/404",
    "domain": "example.com",
    "pageTitle": "Page Not Found | Example",
    "viewport": "desktop",
    "statusCode": 404,
    "metadata": {
      "kind": "error",
      "name": "404",
      "vertical": "error",
      "pageName": "Not Found",
      "section": "error",
      "type": "error"
    }
  },
  {
    "404": false,
    "imagePath": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    "url": "https://example.com/contact",
    "domain": "example.com",
    "pageTitle": "Contact | Example",
    "viewport": "mobile",
    "statusCode": 200,
    "metadata": {
      "kind": "page",
      "name": "Contact",
      "vertical": "support",
      "pageName": "Contact",
      "section": "support",
      "type": "form"
    }
  }
];