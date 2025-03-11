import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./db";

dotenv.config();
const app = express();

app.use(express.json()); // Para parsear JSON
app.use(cors()); // Habilitar CORS
app.use(morgan("dev")); //Mostrar logs de llamadas a backend
// Rutas

// Iniciar el servidor
connectDB();
const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
