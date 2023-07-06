import { Product } from "@/types";
import { getProductsPriceRange, filterProductsByRating } from "./utils";

describe("#getProductsPriceRange", () => {
  it("should correctly determine the minimum and maximum price from a list of products", () => {
    const products = [
      {
        id: 4,
        price: 280,
      },
      {
        id: 5,
        price: 499,
      },
    ] as Product[];

    const result = getProductsPriceRange(products);

    expect(result).toEqual([280, 499]);
  });

  it("should correctly handle a list with one product", () => {
    const products = [
      {
        id: 4,
        price: 280,
      },
    ] as Product[];

    const result = getProductsPriceRange(products);

    expect(result).toEqual([280, 280]);
  });

  it("should throw error when list is empty", () => {
    const products = [] as Product[];
    const result = getProductsPriceRange(products);
    expect(result).toEqual([0, 0]);
  });
});

describe("#filterProductsByRating", () => {
  it("should correctly filter products based on rating", () => {
    const products = [
      { id: 1, rating: 3.5 },
      { id: 2, rating: 4.0 },
      { id: 3, rating: 4.5 },
      { id: 4, rating: 5.0 },
    ] as Product[];

    const result = filterProductsByRating(products, 4);
    expect(result).toEqual([
      { id: 2, rating: 4.0 },
      { id: 3, rating: 4.5 },
    ]);
  });

  it("should return all products with 5 stars rating", () => {
    const products = [
      { id: 1, rating: 5.0 },
      { id: 2, rating: 5.0 },
      { id: 3, rating: 5.0 },
    ] as Product[];

    const result = filterProductsByRating(products, 5);

    expect(result).toEqual(products);
  });

  it("should throw an error for invalid ratings", () => {
    const products = [{ id: 1, rating: 3.5 }] as Product[];

    expect(() => filterProductsByRating(products, 6)).toThrow();
    expect(() => filterProductsByRating(products, 0)).toThrow();
  });
});
