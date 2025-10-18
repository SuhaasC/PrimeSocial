// Strapi API configuration
const STRAPI_URL = import.meta.env.MODE === 'production' 
  ? 'https://your-domain.com/cms' // Change this to your production Strapi URL
  : 'http://localhost:1337';

export const STRAPI_CONFIG = {
  baseURL: STRAPI_URL,
  apiURL: `${STRAPI_URL}/api`,
  mediaURL: `${STRAPI_URL}/uploads`,
};

// Helper function to fetch data from Strapi
export const fetchFromStrapi = async (endpoint: string) => {
  try {
    const response = await fetch(`${STRAPI_CONFIG.apiURL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    return null;
  }
};

// Helper function to get media URLs
export const getStrapiMediaURL = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_CONFIG.mediaURL}${url}`;
};

// Content type interfaces for TypeScript
export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

// Specific content type interfaces
export interface Testimonial {
  name: string;
  company: string;
  content: string;
  results: string;
  image?: string;
  rating?: number;
}

export interface Service {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  price?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

