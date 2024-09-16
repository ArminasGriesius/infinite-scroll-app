import { useState } from "react";
import { Image } from "../services/interfaces";

export const useImagesContainer = () => {
  const data = window.localStorage.getItem("FAVORITES");
  const initialState = data !== null ? JSON.parse(data) : [];
  const [favoriteImages, setFavoriteImages] = useState<Image[]>(initialState);

  const favoritedImg = (image: Image) => {
    return favoriteImages.some((favImage) => favImage.id === image.id);
  };

  const handleFavorite = (image: Image) => {
    if (!favoritedImg(image)) {
      const newFavorites = [...favoriteImages, image];
      setFavoriteImages(newFavorites);
      window.localStorage.setItem("FAVORITES", JSON.stringify(newFavorites));
    }
  };

  const handleRemoveFavorite = (image: Image) => {
    const newFavorites = favoriteImages.filter(
      (favImage) => favImage.id !== image.id
    );
    setFavoriteImages(newFavorites);
    window.localStorage.setItem("FAVORITES", JSON.stringify(newFavorites));
  };

  return { favoritedImg, handleFavorite, handleRemoveFavorite, favoriteImages };
};
