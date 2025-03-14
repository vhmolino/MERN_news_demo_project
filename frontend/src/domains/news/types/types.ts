import { ObjectId } from "mongodb";

export type New = {
  _id: ObjectId;
  title: string;
  description: string;
  content: string;
  author: string;
  date: Date;
  archived: boolean;
};
