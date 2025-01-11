import { SkeletonPostCard } from "@/components/PostCard";
import { SkeletonList } from "@/components/Skeleton";
import { Suspense } from "react";

const loading = () => {
  return (
    <>
      <h1 className="page-title">Posts hello</h1>

      <Suspense>
        <div className="card-grid">
          <SkeletonList amount={6}>
            <SkeletonPostCard />
          </SkeletonList>
        </div>
      </Suspense>
    </>
  );
};
export default loading;
