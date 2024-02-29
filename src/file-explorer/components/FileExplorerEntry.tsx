import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FileEntry, readTextFile } from "@tauri-apps/api/fs";
import { useState } from "react";
import { useActiveFileStore } from "../hooks/useActiveFileStore";

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

  const isFolder = !!children;

  const toggleOrSetActiveFile = ({
    name,
    path,
  }: Omit<FileEntry, "children">) => {
    if (isFolder) setIsOpen(!isOpen);
    else setActiveFile({ name, path });
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        className="flex items-center gap-1 rounded-sm transition-colors hover:bg-neutral-600"
        onClick={() => toggleOrSetActiveFile({ name, path })}
      >
        {isFolder && (
          <ChevronRightIcon className={`h-4 w-4 ${isOpen && "rotate-90"}`} />
        )}
        <span>{name}</span>
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
