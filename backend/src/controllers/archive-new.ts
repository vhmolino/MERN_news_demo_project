import { Request, Response } from "express";
import { getDB } from "../db";
import { ObjectId } from "mongodb";

// Agregar una noticia nueva
export const archiveNew = async (req: Request, res: Response) => {
  try {
    const db = getDB();
    const id = req.body.newId;
    const objectId = new ObjectId(id);
    await db
      .collection("news")
      .findOneAndUpdate(
        { _id: objectId },
        { $set: { archivedDate: new Date() } },
        { returnDocument: "after" }
      );

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la noticia" });
  }
};
