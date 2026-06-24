export interface CardProductsProps {
  product: {
    id: number;
    img: string;
    title: string;
    categories?: string;
    variants?: number;
    price: string | number;
  };
}