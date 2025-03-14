import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const dbUrl = process.env.DATABASE_URL;
let client: MongoClient;
let db: Db;

const connectDB = async () => {
  try {
    client = new MongoClient(dbUrl || "");
    await client.connect();
    db = client.db();
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) {
    throw new Error("Base de datos no conectada");
  }
  return db;
};

export { connectDB, getDB };
