export interface Image {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  ownername: string;
  secret: string;
  server: string;
  title: string;
}

export interface SingleImageProps {
  image: Image;
  onFavorite: (image: Image) => void;
  onRemoveFavorite: (image: Image) => void;
  isFav: boolean;
}

export interface FetchImagesResponse {
  stat: string;
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: Image[];
  };
}
