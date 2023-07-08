import ProductList from "@/components/ui/product-list";
import { render, screen, fireEvent } from "@testing-library/react";
import { productsData } from "../../test-mocks/data";
import mockRouter from "next-router-mock";

describe("ProductList - Rendering", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
    render(<ProductList products={productsData} />);
  });
  it("should display two product cards", async () => {
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(2);
  });

  it("should display product names", async () => {
    expect(await screen.findByText("iPhone 9")).toBeInTheDocument();
    expect(await screen.findByText("iPhone X")).toBeInTheDocument();
  });

  it("should go to product page on click", async () => {
    fireEvent.click(screen.getAllByTestId("product-card")[0]);
    expect(mockRouter.pathname).toEqual("/product/1");
  });
});
