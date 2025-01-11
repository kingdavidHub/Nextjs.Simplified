import { getPosts } from "@/api/posts";
import { PostCard } from "@/components/PostCard";
import { PostProps } from "@/types";

const page = async () => {
  const posts: PostProps[] = await getPosts();

  return (
    <>
      <h1 className="page-title">Posts</h1>

      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};
export default page;
