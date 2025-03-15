// Función para obtener todos los usuarios
import { Request, Response } from "express";
import { getDB } from "../db";
import { New } from "../types/types";
import { notEqual } from "assert";

// Obtener todas las news
export const getArchivedNews = async (req: Request, res: Response) => {
  try {
    const db = getDB();
    const params = req.body;
    const pageSize = 6;
    const totalNews = await db
      .collection("news")
      .countDocuments({ archivedDate: { $ne: null } });
    const totalPages = Math.ceil(totalNews / pageSize);
    const news = (await db
      .collection("news")
      .find({ archivedDate: { $ne: null } })
      .sort({ date: -1 })
      .skip(params.actualPage == 1 ? 0 : pageSize * (params.actualPage - 1))
      .limit(pageSize)
      .toArray()) as New[];

    res.status(200).json({ news: news, totalPages: totalPages });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las noticias archivadas" });
  }
};
