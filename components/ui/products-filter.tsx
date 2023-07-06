"use client";

import qs from "query-string";
import { useDebounce } from "@/hooks/use-debounce";
import { Star } from "lucide-react";
import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PriceRangeFilterProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

interface Filters {
  category: string;
  price: PriceRangeFilterProps["value"];
  stars: number | null;
}

interface FilterProps {
  categories: string[];
  priceRange: PriceRangeFilterProps["value"];
}

const CategoryFilter: FC<{
  categories: string[];
  value: string;
  onChange: (category: string) => void;
}> = ({ categories, value = "all", onChange }) => (
  <div className="my-3">
    <label
      htmlFor="category"
      className="block text-sm font-medium text-gray-700"
    >
      Category
    </label>
    <select
      id="category"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option key="all" value="all">
        All
      </option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

const PriceRangeFilter: FC<PriceRangeFilterProps> = ({ value, onChange }) => {
  const [localValue, setLocalValue] = useState(value);

  const debouncedPrice = useDebounce(localValue);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  /**
   * @todo only validate after debounce is over.
   */
  const handleMinValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    setLocalValue([newMin, localValue[1]]);
  };

  const handleMaxValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    setLocalValue([localValue[0], newMax]);
  };

  // Notify the parent about the change
  useEffect(() => {
    onChange(debouncedPrice);
  }, [debouncedPrice, onChange]);

  return (
    <div className="flex gap-4">
      <div>
        <label
          htmlFor="priceMin"
          className="block text-sm font-medium text-gray-700"
        >
          Min Price
        </label>
        <input
          type="number"
          id="priceMin"
          value={localValue[0]}
          onChange={handleMinValChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="priceMax"
          className="block text-sm font-medium text-gray-700"
        >
          Max Price
        </label>
        <input
          type="number"
          id="priceMax"
          value={localValue[1]}
          onChange={handleMaxValChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

const StarsFilter: FC<{
  value: number | null;
  onChange: (stars: number) => void;
}> = ({ value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">Stars</label>
    <div className="flex gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onChange(star)}
          className={`text-lg cursor-pointer ${
            value && star <= value ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          <Star
            className={
              value && star <= value ? "fill-current text-yellow-500" : ""
            }
          />
        </button>
      ))}
    </div>
  </div>
);

export const ProductsFilter: FC<FilterProps> = ({ categories, priceRange }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = qs.parse(searchParams.toString());

  /**
   * @todo use joi to add validation for query string
   */
  const [filters, setFilters] = useState<Filters>({
    category: typeof current.category === "string" ? current.category : "all",
    price: Array.isArray(current.price)
      ? (current.price.map(Number) as PriceRangeFilterProps["value"])
      : priceRange,
    stars: current.stars ? Number(current.stars) : null,
  });

  let prevPriceRef = useRef(filters.price);

  const handleCategoryChange = useCallback((category: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category,
    }));
  }, []);

  const handlePriceChange = useCallback(
    (price: PriceRangeFilterProps["value"]) => {
      setFilters((prevFilters) => ({ ...prevFilters, price }));
    },
    []
  );

  const handleStarsChange = useCallback((stars: number) => {
    setFilters((prevFilters) => ({ ...prevFilters, stars }));
  }, []);

  useEffect(() => {
    setFilters((prevFilters) => ({ ...prevFilters, price: priceRange }));
    /**
     * @todo bug, this stop filters.price from updating. somehow priceRange change everytime price change?
     */
  }, [priceRange]);

  //   console.log("filters.price", filters.price);
  //   console.log("priceRange", priceRange);

  useEffect(() => {
    const query = {
      ...filters,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    /**
     * @todo this is triggering multiple renders.
     */
    router.push(url);
    prevPriceRef.current = filters.price;
  }, [filters, router]);

  return (
    <div className="flex gap-4">
      <CategoryFilter
        categories={categories}
        value={filters.category}
        onChange={handleCategoryChange}
      />
      <PriceRangeFilter value={filters.price} onChange={handlePriceChange} />
      <StarsFilter value={filters.stars} onChange={handleStarsChange} />
    </div>
  );
};
