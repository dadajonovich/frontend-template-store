type SkeletonProps = {
  width: number;
  height: number;
};

export const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <div className={`skeleton bg-base-content w-${width} h-${height}`}></div>
  );
};
