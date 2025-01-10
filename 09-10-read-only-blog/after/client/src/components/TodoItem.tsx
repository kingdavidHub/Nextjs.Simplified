import { TodoProps } from "@/types";

export function TodoItem({
  completed,
  title,
}: TodoProps) {
  return <li className={completed ? "strike-through" : undefined}>{title}</li>;
}
