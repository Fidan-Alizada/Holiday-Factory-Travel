export type Language = 'en' | 'ru' | 'az';

export interface Review {
  id: string;
  name: string;
  text: string;
  photoUrl?: string;
  date: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: string;
  location: string;
  category: string;
}