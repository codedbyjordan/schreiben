import { Editor } from "@/editor";
import { FileExplorer } from "./file-explorer";

export function App() {
  return (
    <div className="flex h-screen w-full justify-center bg-neutral-900 font-sans text-white">
      <FileExplorer />
      <Editor />
    </div>
  );
}
