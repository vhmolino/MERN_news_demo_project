import axios from "axios";
import { ApiResponse, New } from "../types/types";

const API_URL = `${import.meta.env.VITE_SERVER_URL}/news/getArchivedNews`;

export const getArchivedNews = async ({
  actualPage,
}: {
  actualPage: number;
}): Promise<ApiResponse<{ news: New[]; totalPages: number }>> => {
  try {
    const response = await axios.post<{ news: New[]; totalPages: number }>(
      API_URL,
      { actualPage: actualPage }
    );
    return { data: response.data, error: undefined as never };
  } catch (error) {
    console.error("Error:", error);
    return {
      error: "Error al obtener las noticias archivadas",
      data: undefined as never,
    };
  }
};
