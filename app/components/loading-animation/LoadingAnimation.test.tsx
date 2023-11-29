// LoadingAnimation.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import { LoadingAnimation } from "./LoadingAnimation";

describe("LoadingAnimation", () => {
  it("renders the LoadingAnimation component", () => {
    const { container } = render(<LoadingAnimation />);
    // Ensure the component renders without errors
    expect(container).toBeInTheDocument();

    // You can also make specific assertions about the rendered HTML, for example:
    // expect(container.firstChild).toHaveClass('loader');
  });
});
