import { FetchImagesResponse } from "./interfaces";

const baseURL = "https://api.flickr.com/services/rest";

const defaultParams = {
  method: "flickr.photos.search",
  api_key: import.meta.env.VITE_api_key,
  format: "json",
  nojsoncallback: "1",
  tags: "stratocaster",
  per_page: "30",
  safe_search: "1",
  text: "stratocaster",
  extras: "owner_name",
};

export const fetchImages = async (
  page: number
): Promise<FetchImagesResponse> => {
  const params = { ...defaultParams, page: page.toString() };
  const queryString = new URLSearchParams(params).toString();
  const url = `${baseURL}?${queryString}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = (await response.json()) as FetchImagesResponse;
  if (data.stat !== "ok") {
    throw new Error("API ERROR");
  }
  return data;
};
