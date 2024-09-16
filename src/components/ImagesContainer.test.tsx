import { render, screen } from "@testing-library/react";
import ImagesContainer from "./ImagesContainer";
import * as hooks from "../hooks/useFetchImages";
import { Image } from "../services/interfaces";
import { imageMock } from "../utils/mocks";
import { vi, describe, it } from "vitest";

describe("ImagesContainer", () => {
  const commonImgProps: Image = {
    ...imageMock,
    ownername: "ownername",
    title: "title",
  };
  it("Should render list items correctly", () => {
    vi.spyOn(hooks, "useFetchImages").mockImplementation(() => ({
      images: [
        commonImgProps,
        {
          ...commonImgProps,
          ownername: "ownername-2",
          title: "title-2",
        },
      ],
      error: "",
      loading: false,
    }));
    render(<ImagesContainer />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("ownername")).toBeInTheDocument();
    expect(screen.getByText("title-2")).toBeInTheDocument();
    expect(screen.getByText("ownername-2")).toBeInTheDocument();
  });

  it("should render loader on loading", () => {
    vi.spyOn(hooks, "useFetchImages").mockImplementation(() => ({
      images: [],
      error: "",
      loading: true,
    }));
    render(<ImagesContainer />);
    expect(screen.getByAltText("Vinted image")).toBeInTheDocument();
  });

  it("should render error message", () => {
    vi.spyOn(hooks, "useFetchImages").mockImplementation(() => ({
      images: [],
      error: "error message",
      loading: false,
    }));
    render(<ImagesContainer />);
    expect(screen.getByText("error message")).toBeInTheDocument();
  });
});
