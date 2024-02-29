import { create } from "zustand";

type LocalFile = {
  path: string;
  name: string;
  contents: string;
};

type ActiveFileStore = {
  activeFile: LocalFile;
  changeActiveFile: (path: LocalFile) => void;
};

export const useActiveFileStore = create<ActiveFileStore>()((set) => ({
  activeFile: {
    path: "",
    name: "",
    contents: "",
  },
  changeActiveFile: (newActiveFile) =>
    set(() => ({ activeFile: newActiveFile })),
}));
