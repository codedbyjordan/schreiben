import { Editor } from "@/editor";
import { FileExplorer } from "./file-explorer";
import { Titlebar } from "./components/Titlebar";

export function App() {
  return (
    <div className="flex h-screen w-full flex-col bg-neutral-900 font-sans text-white">
      <Titlebar />
      <div className="flex h-full">
        <FileExplorer />
        <Editor />
      </div>
    </div>
  );
}
