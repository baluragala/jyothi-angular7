export interface Course {
  id: number;
  title: string;
  author: string;
  rating?: number;
  price: number;
  duartion?: number;
  category: string;
  isPublished?: boolean;
}
