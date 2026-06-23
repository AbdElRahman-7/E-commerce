import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

type Product = {
  id?: string | number;
  name: string;
  type: string;
  category?: string;
  img?: string;
  price?: number | string;
  colorCode?: string;
  extraColors?: number;
};

export const useProductsFilter = (initialProducts: Product[]) => {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product: Product) => {
      const prodCategory = product.category;

      const matchesCategory = categoryFilter
        ? prodCategory?.toLowerCase() === categoryFilter.toLowerCase()
        : true;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase());
      
        if (searchQuery.trim() !== "") {
        return matchesSearch;
      }

      return matchesCategory;
    });
  }, [initialProducts, categoryFilter, searchQuery]);

  return {
    categoryFilter,
    searchQuery,
    setSearchQuery,
    filteredProducts,
  };
};
