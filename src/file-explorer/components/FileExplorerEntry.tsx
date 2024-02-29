import { FileEntry } from "@tauri-apps/api/fs";

type FolderProps = FileEntry;

export function FileExplorerEntry({ name, path, children }: FolderProps) {
  return (
    <div className="flex flex-col gap-1">
      <span>{name}</span>
      <div className="ml-4">
        {children?.map((child) => (
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
