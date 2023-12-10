import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import { LoadingAnimation } from "./LoadingAnimation";

describe("LoadingAnimation", () => {
  it("renders the LoadingAnimation component", () => {
    const { container } = render(<LoadingAnimation />);

    expect(container).toBeInTheDocument();
  });
});
