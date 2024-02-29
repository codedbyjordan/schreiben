import { useQuery } from "@tanstack/react-query";
import { BaseDirectory, FileEntry, readDir } from "@tauri-apps/api/fs";

export function useDirectory(path: string) {
  const { data: files, isLoading: isLoadingFiles } = useQuery<FileEntry[]>({
    queryKey: ["folder", path],
    queryFn: async () =>
      await readDir(path, {
        dir: BaseDirectory.Home,
        recursive: true,
      }),
  });

  return { files, isLoadingFiles };
}
