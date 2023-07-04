"use client";

import { useState, FC } from "react";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import { cn, toTitleCase } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import NoResults from "@/components/ui/no-results";

interface ProductListProps {
  title: string;
  items: Product[];
  categories: string[];
}

const ProductList: FC<ProductListProps> = ({ items, categories }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex flex-1 flex-col gap-5 overflow-hidden px-1">
        <div className="space-y-4">
          <h3 className="text-sm font-medium tracking-wide text-foreground">
            Price range ($)
          </h3>
          <Slider
            variant="range"
            thickness="thin"
            defaultValue={[0, 500]}
            max={500}
            step={1}
            value={priceRange}
            onValueChange={(value: typeof priceRange) => {
              setPriceRange(value);
            }}
          />
          <div className="flex items-center space-x-4">
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              max={priceRange[1]}
              className="h-9"
              value={priceRange[0]}
              onChange={(e) => {
                const value = Number(e.target.value);
                setPriceRange([value, priceRange[1]]);
              }}
            />
            <span className="text-muted-foreground">-</span>
            <Input
              type="number"
              inputMode="numeric"
              min={priceRange[0]}
              max={500}
              className="h-9"
              value={priceRange[1]}
              onChange={(e) => {
                const value = Number(e.target.value);
                setPriceRange([priceRange[0], value]);
              }}
            />
          </div>
        </div>
        {categories?.length ? (
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              Categories
            </h3>
            <Select
              placeholder="Select categories"
              selected={selectedCategory}
              setSelected={setSelectedCategory}
              options={categories.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          </div>
        ) : null}
      </div>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
