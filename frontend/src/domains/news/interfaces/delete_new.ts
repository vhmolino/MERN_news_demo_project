import axios from "axios";
import { ObjectId } from "mongodb";

export type ApiResponse<T> =
  | { error: string; data: never }
  | { data: T; error: never };

const API_URL = `${import.meta.env.VITE_SERVER_URL}/news/deleteNew`;

export const deleteNew = async (
  newId: ObjectId
): Promise<ApiResponse<null>> => {
  try {
    const response = await axios.post(
      API_URL,
      { newId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return { data: null, error: null as never };
  } catch (error) {
    console.error("Error al agregar la noticia:", error);
    return { error: "Error al agregar la noticia", data: undefined as never };
  }
};
