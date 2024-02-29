import { useDirectory } from "../hooks/useDirectory";
import { FileExplorerEntry } from "./FileExplorerEntry";
import { FileExplorerSkeleton } from "./FileExplorerSkeleton";
export function FileExplorer() {
  const { files, isLoadingFiles } = useDirectory("schreiben-dir-test");

  return (
    <div className="h-full w-full max-w-[350px] border-r border-r-neutral-700 bg-neutral-800 p-4">
      {isLoadingFiles ? (
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
