import { Request, Response } from "express";
import { getDB } from "../db";
import { ObjectId } from "mongodb";

// Agregar una noticia nueva
export const addNew = async (req: Request, res: Response) => {
  try {
    const db = getDB();
    const newToAdd = { _id: new ObjectId(), ...req.body };
    console.log(newToAdd);
    const result = await db.collection("news").insertOne(newToAdd);

    res.status(200).json({
      data: newToAdd,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la noticia" });
  }
};
