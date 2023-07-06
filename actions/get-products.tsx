import { Product } from "@/types";
import qs from "query-string";

interface Query {
  limit?: number;
  skip?: number;
  price?: [number, number];
  category?: string;
  rating?: number;
}

const getUrl = (category?: string) => {
  let URL = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;
  if (category && category !== "all") {
    URL = URL + `/category/${category}`;
  }
  return URL;
};

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: getUrl(query.category),
    query: {
      limit: query.limit,
      skip: query.skip,
    },
  });
  const res = await fetch(url);

  const { products } = await res.json();

  if (res.ok) {
    return products;
  } else {
    throw new Error("products api failed");
  }
};

export default getProducts;
