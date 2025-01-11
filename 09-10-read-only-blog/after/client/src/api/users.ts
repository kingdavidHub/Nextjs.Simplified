import { wait } from "@/lib";
import { TodoProps, PostProps, UserProps } from "@/types";

export const getUsers = async (): Promise<UserProps[]> => {
  try {
    const data = await fetch(`${process.env.API_URL}/users`);
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getUser = async (userId: string | number): Promise<UserProps> => {
  try {
    wait(10000)
    const data = await fetch(`${process.env.API_URL}/users/${userId}`);
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export const getUserPosts = async (
  userId: string | number
): Promise<PostProps[]> => {
  try {
    const data = await fetch(`${process.env.API_URL}/users/${userId}/posts`);
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getUserTodos = async (
  userId: string | number
): Promise<TodoProps[]> => {
  try {
    const data = await fetch(`${process.env.API_URL}/users/${userId}/todos`);
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
};
