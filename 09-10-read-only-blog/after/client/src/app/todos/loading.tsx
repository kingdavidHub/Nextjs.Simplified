import { Skeleton, SkeletonList } from "@/components/Skeleton";

const loading = () => {
  return (
    <div>
      <h1 className="page-title">Todos</h1>
      <ul>
        <SkeletonList amount={10}>
          <li>
            <Skeleton short />
          </li>
        </SkeletonList>
      </ul>
    </div>
  );
};
export default loading;
