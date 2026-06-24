import { notFound } from "next/navigation";
import { Newproducts } from "@/features/admin/products/constants/data";
import SingleProductPage from "@/features/admin/products/components/SingleProductPage";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const product = Newproducts.find((p) => String(p.id) === id);

  if (!product) {
    notFound();
  }

  return <SingleProductPage product={product} />;
}
