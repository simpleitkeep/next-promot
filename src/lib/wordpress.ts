import { WordPressPost, WordPressPage, GeneralSettings } from '../types/wordpress';

const API_URL = process.env.WORDPRESS_API_URL || '';

if (!API_URL) {
  console.warn('Warning: WORDPRESS_API_URL is not set in environment variables');
}

interface FetchOptions {
  revalidate?: number;
}

/**
 * Generic function to fetch data from WordPress REST API
 */
export async function fetchAPI<T>(
  endpoint: string, 
  options: FetchOptions = {}
): Promise<T> {
  const { revalidate = 3600 } = options; // Cache for 1 hour by default
  
  try {
    const url = `${API_URL}${endpoint}`;
    console.log(`Fetching: ${url}`);
    
    const res = await fetch(url, {
      next: { revalidate },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error(
        `WordPress API error: ${res.status} ${res.statusText} - ${url}`
      );
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Get all posts with embedded media and author
 */
export async function getPosts(perPage: number = 10): Promise<WordPressPost[]> {
  return fetchAPI<WordPressPost[]>(`/posts?_embed&per_page=${perPage}&orderby=date&order=desc`);
}

/**
 * Get single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const posts = await fetchAPI<WordPressPost[]>(`/posts?slug=${slug}&_embed`);
    return posts[0] || null;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get all pages
 */
export async function getPages(): Promise<WordPressPage[]> {
  return fetchAPI<WordPressPage[]>('/pages?_embed');
}

/**
 * Get single page by slug
 */
export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const pages = await fetchAPI<WordPressPage[]>(`/pages?slug=${slug}&_embed`);
    return pages[0] || null;
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get all categories
 */
export async function getCategories(): Promise<GeneralSettings[]> {
  return fetchAPI<GeneralSettings[]>('/categories');
}

/**
 * Get posts by category ID
 */
export async function getPostsByCategory(categoryId: number, perPage: number = 10): Promise<WordPressPost[]> {
  return fetchAPI<WordPressPost[]>(`/posts?categories=${categoryId}&_embed&per_page=${perPage}`);
}

/**
 * Search posts
 */
export async function searchPosts(query: string, perPage: number = 10): Promise<WordPressPost[]> {
  return fetchAPI<WordPressPost[]>(`/posts?search=${encodeURIComponent(query)}&_embed&per_page=${perPage}`);
}