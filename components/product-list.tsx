"use client";

import { FC, useEffect, useState } from "react";
import qs from "query-string";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import { useSearchParams } from "next/navigation";
import { filterProductsByRating } from "@/lib/utils";

interface ProductListProps {
  items: Product[];
}

const ProductList: FC<ProductListProps> = ({ items }) => {
  /**
   * can also use zustand or react context to pass rating value
   */
  const searchParams = useSearchParams();
  const current = qs.parse(searchParams.toString());
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    // Filter the items when the stars rating changes
    if (current.stars) {
      setFilteredItems(filterProductsByRating(items, Number(current.stars)));
    } else {
      setFilteredItems(items);
    }
  }, [current.stars, items]);

  return (
    <div className="space-y-4">
      {filteredItems.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
