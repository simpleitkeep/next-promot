export interface WPPost {
    id: number;
    date: string;
    slug: string;
    status: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    _embedded?: {
      'wp:featuredmedia'?: Array<{
        id: number;
        source_url: string;
        alt_text: string;
        media_details?: {
          width: number;
          height: number;
        };
      }>;
      author?: Array<{
        id: number;
        name: string;
        description: string;
      }>;
      'wp:term'?: Array<Array<{
        id: number;
        name: string;
        slug: string;
      }>>;
    };
  }
  
  export interface WPPage {
    id: number;
    date: string;
    slug: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
  }
  
  export interface WPCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    count: number;
  }