import Info from "@/components/info";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";

Object.defineProperty(global, "navigator", {});

const product = {
  id: 1,
  title: "string",
  description: "string",
  price: 1,
  discountPercentage: 1,
  rating: 1,
  stock: 1,
  brand: "string",
  category: "string",
  thumbnail: "string",
  images: ["string"],
};

it("should render the component", () => {
  /* eslint react/jsx-filename-extension:0 */
  const component = render(<Info data={product} />);

  expect(component).toMatchSnapshot();
});
