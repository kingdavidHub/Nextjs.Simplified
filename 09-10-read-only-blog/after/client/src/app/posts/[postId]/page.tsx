import { getComments, getPost } from "@/api/posts";
import { getUser } from "@/api/users";
import {  Skeleton, SkeletonList } from "@/components/Skeleton";
import { CommentProps, PostProps, UserProps } from "@/types";
import Link from "next/link";
import { Suspense } from "react";

const PostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;

  return (
    <>
      <Suspense
        fallback={
          <>
            <h1 className="page-title">
              <Skeleton short inline />
            </h1>
            {/* user */}
            <span className="page-subtitle">
              By: <Skeleton short inline />
            </span>

            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </>
        }
      >
        <PostDetails postId={postId} />
      </Suspense>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        <Suspense
          fallback={
            <SkeletonList amount={5}>
              <div className="card">
                <div className="card-body">
                  <div className="text-sm mb-1">
                    <Skeleton short />
                  </div>
                  <Skeleton />
                  <Skeleton />
                </div>
              </div>
            </SkeletonList>
          }
        >
          <Comments postId={postId} />
        </Suspense>
      </div>
    </>
  );
};
export default PostPage;

async function PostDetails({ postId }: { postId: string }) {
  const post: PostProps = await getPost(postId);

  return (
    <>
      <h1 className="page-title">{post?.title}</h1>

      <span className="page-subtitle">
        By:{" "} 
        <Suspense fallback= {
          <Skeleton short inline />
        }>
          <UserDetails userId={post?.userId} />
        </Suspense>
      </span>
      <div>{post?.body}</div>
    </>
  );
}

async function UserDetails({ userId }: { userId: string | number }) {
  const user: UserProps = await getUser(userId);
  return <Link href={`/users/${user?.id}`}>{user?.name}</Link>;
}

async function Comments({ postId }: {
  postId: string;
}) {
  const comments: CommentProps[] = await getComments(postId);

  return comments.map(comment => (
    <div key={comment?.id} className="card">
      <div className="card-body">
        <div className="text-sm mb-1">{comment?.email}</div>
        {comment?.body}
      </div>
    </div>
  ))
}