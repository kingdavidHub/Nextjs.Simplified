import { getUser, getUserPosts, getUserTodos } from "@/api/users";
import { PostCard, SkeletonPostCard } from "@/components/PostCard";
import {
  SimpleSkeletonText,
  Skeleton,
  SkeletonList,
} from "@/components/Skeleton";
import { TodoItem } from "@/components/TodoItem";
import { TodoProps, UserPostsProps, UserProps } from "@/types";
import { Suspense } from "react";

const UsersPage = async ({
  params,
}: {
  params: Promise<{
    userId: string;
  }>;
}) => {
  const { userId } = await params;

  return (
    <div>
      <Suspense
        fallback={
          <>
            <h1 className="page-title">
              <Skeleton short inline />
            </h1>
            <div className="page-subtitle">
              <Skeleton short inline />
            </div>
            <div>
              <b>Company:</b> <Skeleton short inline />
            </div>
            <div>
              <b>Website:</b> <Skeleton short inline />
            </div>
            <div>
              <b>Address:</b> <Skeleton short inline />
            </div>
          </>
        }
      >
        <UserInfo userId={userId} />
      </Suspense>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={3}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <UserPosts userId={userId} />
        </Suspense>
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={5}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <UserTodos userId={userId} />
        </Suspense>
      </ul>
    </div>
  );
};

async function UserInfo({ userId }: { userId: string }) {
  const user: UserProps = await getUser(userId);
  return (
    <>
      <h1 className="page-title">
        <SimpleSkeletonText>{user.name}</SimpleSkeletonText>
      </h1>
      <div className="page-subtitle">
        <SimpleSkeletonText>{user.email}</SimpleSkeletonText>
      </div>
      <div>
        <b>Company:</b>{" "}
        <SimpleSkeletonText>{user.company.name}</SimpleSkeletonText>
      </div>
      <div>
        <b>Website:</b> <SimpleSkeletonText>{user.website}</SimpleSkeletonText>
      </div>
      <div>
        <b>Address:</b>{" "}
        <SimpleSkeletonText>
          {`${user.address.street} ${user.address.suite}
        ${user.address.city} ${user.address.zipcode}`}
        </SimpleSkeletonText>
      </div>
    </>
  );
}

async function UserPosts({userId}: { userId: string }) {
  const posts: UserPostsProps[] = await getUserPosts(userId);
  return posts.map((post) => <PostCard key={post.id} {...post} />);
}


async function UserTodos({userId}: { userId: string }) {
  const todos: TodoProps[] = await getUserTodos(userId);
  return todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
}

export default UsersPage;
