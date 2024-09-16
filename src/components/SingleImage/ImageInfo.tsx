import css from "./ImageInfo.module.css";
import { SingleImageProps } from "../../services/interfaces";

const ImageInfo = ({
  image,
  onFavorite,
  onRemoveFavorite,
  isFav,
}: SingleImageProps) => {
  const handleFavoriteClick = () => {
    isFav ? onRemoveFavorite(image) : onFavorite(image);
  };

  return (
    <div className={css.imageInfoBox}>
      <div className={css.imageInfoText}>
        <div>
          <h3 className={css.imageTitle}>{image.title}</h3>
          <div className={css.line}></div>
          <h4 className={css.imageOwner}>{image.ownername}</h4>
        </div>
        <button onClick={handleFavoriteClick} className={css.favBtn}>
          {isFav ? "Remove" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default ImageInfo;
