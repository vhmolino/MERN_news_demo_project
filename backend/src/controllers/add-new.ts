import { Request, Response } from "express";
import { getDB } from "../db";
import { ObjectId } from "mongodb";
import { New } from "../types/types";

// Agregar una noticia nueva
export const addNew = async (req: Request, res: Response) => {
  try {
    const db = getDB();
    const newToAdd = req.body;
    newToAdd.date = new Date(newToAdd.date);
    const result = await db.collection("news").insertOne(newToAdd);
    res.status(200).json({
      data: { _id: result.insertedId, ...newToAdd },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la noticia" });
  }
};
