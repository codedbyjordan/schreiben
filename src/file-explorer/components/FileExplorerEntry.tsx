import { FileEntry, readTextFile } from "@tauri-apps/api/fs";
import { useActiveFileStore } from "../hooks/useActiveFileStore";

type FolderProps = FileEntry;

export function FileExplorerEntry({ name, path, children }: FolderProps) {
  const hasChildFiles = children && children.length > 0;

  const activeFileStore = useActiveFileStore();

  const setActiveFile = async ({ name, path }: Omit<FileEntry, "children">) => {
    const fileContents = await readTextFile(path);
    activeFileStore.changeActiveFile({
      path,
      name: name || "Untitled",
      contents: fileContents,
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <button
        className="rounded-sm transition-colors hover:bg-neutral-600"
        onClick={() => setActiveFile({ name, path })}
      >
        {name}
      </button>
      <div className="ml-4">
        {hasChildFiles &&
          children?.map((child) => (
            <FileExplorerEntry
              key={child.path}
              name={child.name}
              path={child.path}
              children={child.children}
            />
          ))}
      </div>
    </div>
  );
}
