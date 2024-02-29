import { useDirectory } from "../hooks/useDirectory";
import { FileExplorerEntry } from "./FileExplorerEntry";
import { FileExplorerSkeleton } from "./FileExplorerSkeleton";
export function FileExplorer() {
  const { files, isLoadingFiles, isError } = useDirectory("schreiben-dir-test");

  return (
    <div className="h-full w-full max-w-[350px] border-r border-r-neutral-700 bg-neutral-800 p-4">
      {isError ? (
        <span>There was an error loading this directory</span>
      ) : isLoadingFiles ? (
        <FileExplorerSkeleton />
      ) : (
        files?.map((file) => (
          <FileExplorerEntry
            key={file.path}
            name={file.name}
            path={file.path}
            children={file.children}
          />
        ))
      )}
    </div>
  );
}
