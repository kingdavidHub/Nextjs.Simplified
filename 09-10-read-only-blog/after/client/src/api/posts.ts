import { wait } from "@/lib";
import { CommentProps, PostProps } from "@/types";

export async function getPosts(): Promise<PostProps[]> {
  try {
    const data = await fetch(`${process.env.API_URL}/posts`);
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}

export async function getPost(postId: string): Promise<PostProps> {
  try {
    const data = await fetch(`${process.env.API_URL}/posts/${postId}`);
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}

export async function getComments(postId: string | number): Promise<CommentProps[]> {
  try {
    const data = await fetch(`${process.env.API_URL}/posts/${postId}/comments`);
    return data.json();
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}


