import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Loader from "./Loader";

describe("Loader", () => {
  it("Should render alt text", () => {
    render(<Loader />);

    expect(screen.getByAltText("Vinted image")).toBeInTheDocument();
  });
});
