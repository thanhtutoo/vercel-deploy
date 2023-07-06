import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { ProductsFilter } from "@/components/ui/products-filter";
import { getProductsPriceRange } from "@/lib/utils";

export const revalidate = 0;

const HomePage = async ({ params, searchParams }) => {
  const products = await getProducts({ limit: 12, skip: 0, ...searchParams });
  const categories = await getCategories();
  const priceRange = getProductsPriceRange(products);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <ProductsFilter categories={categories} priceRange={priceRange} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
