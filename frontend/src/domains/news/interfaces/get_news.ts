import axios from "axios";
import { New } from "../types/types";

export type ApiResponse<T> =
  | { error: string; data: never }
  | { data: T; error: never };

const API_URL = `${import.meta.env.VITE_SERVER_URL}/news`;
export const getNews = async (): Promise<ApiResponse<New[]>> => {
  try {
    const response = await axios.get<{ news: New[] }>(API_URL);
    return { data: response.data.news, error: undefined as never };
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
    return { error: "Error al obtener las noticias", data: undefined as never };
  }
};
