import { FileEntry, readTextFile } from "@tauri-apps/api/fs";
import { useActiveFileStore } from "../hooks/useActiveFileStore";
import { useState } from "react";

type FolderProps = FileEntry;

export function FileExplorerEntry({ name, path, children }: FolderProps) {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleOrSetActiveFile = ({
    name,
    path,
  }: Omit<FileEntry, "children">) => {
    if (children) setIsOpen(!isOpen);
    else setActiveFile({ name, path });
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        className="rounded-sm transition-colors hover:bg-neutral-600"
        onClick={() => toggleOrSetActiveFile({ name, path })}
      >
        {name}
      </button>
      {isOpen && (
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
      )}
    </div>
  );
}
