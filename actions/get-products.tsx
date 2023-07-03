import { Product } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/api/products`;

interface Query {
  limit?: number;
  skip?: number;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      limit: query.limit,
      skip: query.limit,
    },
  });
  const res = await fetch(url);

  const {products} = await res.json();

  if (res.ok) {
    return products;
  } else {
    throw new Error('products api failed');
  }
};

export default getProducts;
