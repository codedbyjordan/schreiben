import { useQuery } from "@tanstack/react-query";
import { copyFile, BaseDirectory } from '@tauri-apps/api/fs';

export function useFolder(path: string) {
  return useQuery({
    queryKey: ["folder", path],
    queryFn: async () => {
      return await 
    }
  })
}
