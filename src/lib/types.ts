export interface User {
  id: string;
  username: string;
  email?: string;
  role?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  basePrice: number;
  thumbnail: string;
}
