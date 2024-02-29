import { twMerge } from "tailwind-merge";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={twMerge(
        "h-4 w-full animate-pulse rounded-lg bg-neutral-600",
        className,
      )}
    ></div>
  );
}
