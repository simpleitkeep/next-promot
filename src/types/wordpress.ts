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
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  author: {
    node: {
      name: string;
    };
  };
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