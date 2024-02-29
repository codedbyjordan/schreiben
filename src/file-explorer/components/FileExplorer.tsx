import { useDirectory } from "../hooks/useDirectory";
import { FileExplorerEntry } from "./FileExplorerEntry";
import { FileExplorerSkeleton } from "./FileExplorerSkeleton";

export function FileExplorer() {
  const { files, isLoadingFiles, isError } = useDirectory("schreiben-dir-test");
  const hasFiles = files && files.length > 0;

  return (
    <div className="flex h-full w-full max-w-[350px] flex-col items-start border-r border-r-neutral-700 bg-neutral-800 p-4">
      {isError ? (
        <span>There was an error loading this directory</span>
      ) : isLoadingFiles ? (
        <FileExplorerSkeleton />
      ) : (
        hasFiles &&
        files.map((file) => (
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
