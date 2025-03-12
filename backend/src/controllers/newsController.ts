// Función para obtener todos los usuarios
import { Request, Response } from "express";
import { getDB } from "../db";
import { New } from "../types/types";

// Obtener todas las news
export const getNews = async (req: Request, res: Response) => {
  try {
    const db = await getDB();
    const news = (await db.collection("news").find().toArray()) as New[];
    res.status(200).json({ news });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las noticias" });
  }
};

// Agregar una noticia nueva
export const addNew = async (req: Request, res: Response) => {
  try {
    const db = getDB();
    const { newToAdd } = req.body;

    const result = await db.collection("news").insertOne(newToAdd);

    res.status(200).json({
      message: "Noticia creada correctamente",
      id: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la noticia" });
  }
};
