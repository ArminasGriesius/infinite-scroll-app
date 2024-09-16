import { useEffect, useState } from "react";
import { fetchImages } from "../services/api-client";
import { Image } from "../services/interfaces";

interface UseFetchImagesProps {
  page: number;
}

export const useFetchImages = ({ page }: UseFetchImagesProps) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string>("");

  const fetchImagesRequest = async (page: number) => {
    setLoading(true);
    try {
      const data = await fetchImages(page);
      setImages((prevImages) =>
        [...prevImages, ...data.photos.photo].reduce<Image[]>((acc, curr) => {
          if (acc.findIndex((i) => i.id === curr.id) === -1) {
            acc.push(curr);
          }
          return acc;
        }, [])
      );
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImagesRequest(page);
  }, [page]);

  return { images, loading, error };
};
