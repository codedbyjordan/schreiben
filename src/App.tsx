import { Editor } from "@/editor";
import { FileExplorer } from "./file-explorer";

export function App() {
  return (
    <div className="grid min-h-dvh w-full grid-cols-3 justify-center bg-neutral-900 font-sans text-white">
      <FileExplorer />
      <div className="col-span-2">
        <Editor />
      </div>
    </div>
  );
}
