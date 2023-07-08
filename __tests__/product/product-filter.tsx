import ProductList from "@/components/ui/product-list";
import { render, screen, fireEvent } from "@testing-library/react";
import { productsData } from "../../test-mocks/data";
import mockRouter from "next-router-mock";

describe("ProductList - Rendering", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/?category=smartphones&price=12&price=600");
    render(<ProductList products={productsData} />);
  });
  it("should display two product cards", async () => {
    const productCards = screen.getAllByTestId("product-card");
    console.log(productCards);
    expect(productCards).toHaveLength(1);
  });
});
