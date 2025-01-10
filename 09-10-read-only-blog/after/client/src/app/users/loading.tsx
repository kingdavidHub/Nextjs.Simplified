import { Skeleton, SkeletonButton, SkeletonList } from "@/components/Skeleton";
import { Suspense } from "react";

const loading = () => {
  return (
    <>
      <div className="card-grid">
        <Suspense>
          <SkeletonList amount={6}>
            <div className="card">
              <div className="card-header">
                <Skeleton short />
              </div>
              <div className="card-body">
                <Skeleton short />
                <Skeleton short />
                <Skeleton short />
              </div>
              <div className="card-footer">
                <SkeletonButton />
              </div>
            </div>
          </SkeletonList>
        </Suspense>
      </div>
    </>
  );
};

export default loading;
