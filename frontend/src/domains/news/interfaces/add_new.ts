import axios from "axios";
import { New } from "../types/types";

export type ApiResponse<T> =
  | { error: string; data: never }
  | { data: T; error: never };

const API_URL = `${import.meta.env.VITE_SERVER_URL}/news/add`;

export const addNew = async (
  newNew: Partial<New>
): Promise<ApiResponse<New>> => {
  console.log(newNew);
  try {
    const response = await axios.post<ApiResponse<New>>(API_URL, newNew, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return { data: response.data.data, error: null as never };
  } catch (error) {
    console.error("Error al agregar la noticia:", error);
    return { error: "Error al agregar la noticia", data: undefined as never };
  }
};
