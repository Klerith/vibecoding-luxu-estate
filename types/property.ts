export type PropertyType = 'sale' | 'rent';

export interface Property {
  id: string;
  title: string;
  slug?: string;
  location: string;
  price: number;
  images: string[];
  beds: number;
  baths: number;
  sqft: number;
  type: PropertyType;
  is_new: boolean;
  created_at: string;
  is_featured?: boolean;
  is_active?: boolean;
  lat?: number;
  lng?: number;
  description?: string;
  year_built?: number;
  parking?: number;
  amenities?: string[];
}
