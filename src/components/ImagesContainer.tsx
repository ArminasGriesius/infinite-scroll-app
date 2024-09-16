import { useCallback, useEffect, useState } from "react";
import css from "./ImagesContainer.module.css";
import SingleImage from "./SingleImage/SingleImage";
import Loader from "./Loader/Loader";
import { useFetchImages } from "../hooks/useFetchImages";
import TopButton from "./TopButton";
import { useImagesContainer } from "../hooks/useImagesContainer";

const ImagesContainer = () => {
  const [page, setPage] = useState(1);
  const { images, loading, error } = useFetchImages({ page });
  const { favoritedImg, handleFavorite, handleRemoveFavorite, favoriteImages } =
    useImagesContainer();

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={css.imagesContainer}>
      {error && <p>{error}</p>}
      <div className={css.imagesGrid}>
        {favoriteImages.map((image) => (
          <SingleImage
            key={image.id}
            image={image}
            isFav={favoritedImg(image)}
            onFavorite={handleFavorite}
            onRemoveFavorite={handleRemoveFavorite}
          />
        ))}
        {images.map((image) =>
          favoritedImg(image) ? null : (
            <SingleImage
              key={image.id}
              image={image}
              isFav={favoritedImg(image)}
              onFavorite={handleFavorite}
              onRemoveFavorite={handleRemoveFavorite}
            />
          )
        )}
      </div>
      {loading && <Loader />}
      <TopButton />
    </div>
  );
};

export default ImagesContainer;
