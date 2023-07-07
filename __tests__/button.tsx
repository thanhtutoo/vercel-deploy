import Button from "@/components/ui/button";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";

Object.defineProperty(global, "navigator", {});

it("should render the component", () => {
  /* eslint react/jsx-filename-extension:0 */
  const component = render(
    <Button onClick={() => {}} className="flex items-center gap-x-2" />
  );

  expect(component).toMatchSnapshot();
});
