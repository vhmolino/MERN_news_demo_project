// Función para obtener todos los usuarios
import { Request, Response } from "express";
import { getDB } from "../db";
import { New } from "../types/types";

// Obtener todas las news
export const getNews = async (req: Request, res: Response) => {
  try {
    const db = getDB();
    const news = (await db
      .collection("news")
      .find({ archived: false })
      .sort({ date: -1 })
      .toArray()) as New[];

    console.log(news);
    res.status(200).json({ news });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las noticias" });
  }
};
