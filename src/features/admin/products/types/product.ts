interface Product {
  id: string | number;
  title: string;
  categories: string;
  price: string;
  img: string;
  variants?: number;
  description?: string;
  colors?: { label: string; hex: string }[];
  sizes?: string[];
  images?: string[];
}

export interface Props {
  product: Product;
}
