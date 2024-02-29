import { FileEntry } from "@tauri-apps/api/fs";

type FolderProps = FileEntry;

export function FileExplorerEntry({ name, path, children }: FolderProps) {
  const hasChildFiles = children && children.length > 0;

  return (
    <div className="flex flex-col gap-1">
      <button className="rounded-sm transition-colors hover:bg-neutral-600">
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
