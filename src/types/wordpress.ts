export interface WordPressPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  date: string;
  modified: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface WordPressPost {
  id: string;
  title: {
    rendered:string;
  };
  excerpt: {
    rendered:string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
  content: string;
  slug: string;
  date: string;

  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface GeneralSettings {
  title: string;
  description: string;
  url: string;
}