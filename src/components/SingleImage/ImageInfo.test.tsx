import { describe, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import ImageInfo from "./ImageInfo";
import { imageMock } from "../../utils/mocks";

describe("ImageInfo", () => {
  it("Should handle favorite click", () => {
    const onFavoriteMock = vi.fn();
    const onRemoveFavoriteMock = vi.fn();

    const { getByText } = render(
      <ImageInfo
        onRemoveFavorite={onRemoveFavoriteMock}
        onFavorite={onFavoriteMock}
        isFav={false}
        image={imageMock}
      />
    );
    fireEvent.click(getByText("Favorite"));
    expect(onFavoriteMock).toHaveBeenCalledTimes(1);
    expect(onRemoveFavoriteMock).toHaveBeenCalledTimes(0);
  });
  it("Should handle remove favorite click", () => {
    const onFavoriteMock = vi.fn();
    const onRemoveFavoriteMock = vi.fn();

    const { getByText } = render(
      <ImageInfo
        onRemoveFavorite={onRemoveFavoriteMock}
        onFavorite={onFavoriteMock}
        isFav={true}
        image={imageMock}
      />
    );
    fireEvent.click(getByText("Remove"));
    expect(onFavoriteMock).toHaveBeenCalledTimes(0);
    expect(onRemoveFavoriteMock).toHaveBeenCalledTimes(1);
  });
});
