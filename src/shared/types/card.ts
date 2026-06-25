export interface CardProductsProps {
  product: {
    id: string | number;
    img: string;
    title: string;
    categories?: string;
    variants?: number;
    price: string | number;
  };
}