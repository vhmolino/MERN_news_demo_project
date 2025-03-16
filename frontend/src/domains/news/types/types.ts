import { ObjectId } from "mongodb";

export type ApiResponse<T> =
  | { error: string; data: never }
  | { data: T; error: never };

export type New = {
  _id: ObjectId;
  title: string;
  description: string;
  content: string;
  author: string;
  date: Date;
  archivedDate: Date | null;
};
