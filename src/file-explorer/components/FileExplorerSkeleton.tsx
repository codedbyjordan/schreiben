import { Skeleton } from "@/components/Skeleton";

export function FileExplorerSkeleton() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
