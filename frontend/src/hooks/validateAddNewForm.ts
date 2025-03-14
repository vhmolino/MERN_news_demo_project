import { New } from "../domains/news/types/types";

// Función de validación
const validateAddNewForm = (
  newObject: Partial<New>
): { error: string } | null => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, description, content, author, date, archived } = newObject;

  if (!title || title.trim() === "") {
    return { error: "El título no puede estar vacío." };
  }

  if (!description || description.trim() === "") {
    return { error: "La descripción no puede estar vacía." };
  }

  if (!content || content.trim() === "") {
    return { error: "El contenido no puede estar vacío." };
  }

  if (!author || author.trim() === "") {
    return { error: "El autor no puede estar vacío." };
  }

  return null;
};

export default validateAddNewForm;
