import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import ProductsFilter from "@/components/ui/products-filter";
import { getProductsPriceRange } from "@/lib/utils";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const products = await getProducts({ limit: 50, skip: 0, ...searchParams });
  const categories = await getCategories();
  const priceRange = getProductsPriceRange(products);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <ProductsFilter categories={categories} priceRange={priceRange} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
