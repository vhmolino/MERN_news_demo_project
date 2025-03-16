import { Request, Response } from "express";
import { getDB } from "../db";
import { ObjectId } from "mongodb";

// Agregar una noticia nueva
export const deleteNew = async (req: Request, res: Response) => {
  try {
    const db = getDB();
    const id = req.body.newId;
    const objectId = new ObjectId(id);
    await db.collection("news").deleteOne({ _id: objectId });

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la noticia" });
  }
};
