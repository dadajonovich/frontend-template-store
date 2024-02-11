type SkeletonProps = {
  className?: string;
  width?: number;
  height?: number;
};

const classNames = (...classNames: (string | undefined)[]) => {
  return classNames.filter((item) => item !== undefined).join(' ');
};

export const Skeleton = ({ className, width, height }: SkeletonProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={classNames(className, 'skeleton bg-base-content')}
    ></div>
  );
};
