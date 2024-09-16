import { render, screen } from "@testing-library/react";
import SingleImage from "./SingleImage";
import { imageMock } from "../../utils/mocks";
import { vi, describe, it } from "vitest";

describe("SingleImage", () => {
  it("Should renders information correctly", () => {
    const onRemoveFavoriteMock = vi.fn();
    const onFavoriteMock = vi.fn();
    render(
      <SingleImage
        onRemoveFavorite={onRemoveFavoriteMock}
        onFavorite={onFavoriteMock}
        isFav={false}
        image={{
          ...imageMock,
          ownername: "OwnerName",
          title: "Test title",
        }}
      />
    );
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("OwnerName")).toBeInTheDocument();
  });
});
