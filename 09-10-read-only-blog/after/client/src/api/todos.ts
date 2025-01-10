import { TodoProps } from "@/types";

export const getTodos = async (): Promise<TodoProps[]> => {
  try {
    const data = await fetch(`${process.env.API_URL}/todos`);
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
};