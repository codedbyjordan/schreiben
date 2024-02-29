import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/solid";
import { appWindow } from "@tauri-apps/api/window";

export function Titlebar() {
  return (
    <div
      className="flex h-10 w-full items-center border-b border-b-neutral-700 bg-neutral-800"
      data-tauri-drag-region
    >
      <span className="mx-auto font-bold">Schreiben</span>
      <div className="flex items-center">
        <button
          onClick={() => appWindow.minimize()}
          className="h-10 w-10 p-2  transition-colors hover:bg-neutral-500"
        >
          <MinusIcon />
        </button>
        <button
          onClick={() => appWindow.toggleMaximize()}
          className="h-10 w-10 p-2  transition-colors hover:bg-neutral-500"
        >
          <div className="mx-auto h-4 w-4 border-2"></div>
        </button>
        <button
          onClick={() => appWindow.close()}
          className="h-10 w-10 p-2  transition-colors hover:bg-red-500"
        >
          <XMarkIcon />
        </button>
      </div>
    </div>
  );
}
