import { Image, SingleImageProps } from "../../services/interfaces";
import { useState } from "react";
import ImageInfo from "./ImageInfo";
import css from "./SingleImage.module.css";

const constructImageUrl = (image: Image, size: "s" | "b") => {
  return `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_${size}.jpg`;
};

const SingleImage = ({
  image,
  onFavorite,
  onRemoveFavorite,
  isFav,
}: SingleImageProps) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);
  return (
    <div className={css.imageBox}>
      <img
        loading="lazy"
        className={css.image}
        src={constructImageUrl(image, "s")}
        alt={image.title}
      />
      {isFav && (
        <img className={css.heart} src="/images/heart.png" alt="Heart" />
      )}
      <img
        loading="lazy"
        className={`${css.image} ${css.highResImg} ${
          isHighResLoaded ? css.visible : css.hidden
        }`}
        src={constructImageUrl(image, "b")}
        alt={image.title}
        onLoad={() => setIsHighResLoaded(true)}
      />

      <ImageInfo
        image={image}
        onFavorite={onFavorite}
        onRemoveFavorite={onRemoveFavorite}
        isFav={isFav}
      />
    </div>
  );
};

export default SingleImage;
