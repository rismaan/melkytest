export interface CarVariant {
  name: string;
  price: number;
}

export interface CarModel {
  model: string;
  image: string;
  variants: CarVariant[];
}

export interface Testimonial {
  customerName: string;
  carModel: string;
  photoUrl: string;
  quote: string;
}

export interface Video {
  title: string;
  embedUrl: string;
}

export interface NewsArticle {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    category: string;
    sourceUrl: string;
}