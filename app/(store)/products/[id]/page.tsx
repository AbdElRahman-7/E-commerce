import { notFound } from "next/navigation";
import { Newproducts } from "@/features/admin/products/constants/data";
import { productsData } from "@/features/admin/products/constants/data";
import { collections } from "@/features/admin/products/constants/collections";
import SingleProductPage from "@/features/admin/products/components/SingleProductPage";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const normalizedProductsData = productsData.map((item) => ({
    id: item.id,
    title: item.name,
    categories: item.type,
    price: String(item.price),
    img: item.img,
  }));

  const product = [...Newproducts, ...collections, ...normalizedProductsData].find(
    (product) => String(product.id) === id,
  );

  if (!product) {
    notFound();
  }

  return <SingleProductPage product={product} />;
}
