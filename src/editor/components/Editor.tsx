import { useState } from "react";
import { Line } from "./Line";
import { useRegisterEditorKeybinds } from "../hooks/useRegisterEditorKeybinds";
import { useImmer } from "use-immer";

export function Editor() {
  const [lines, setLines] = useImmer<Map<string, string>>(
    new Map().set(crypto.randomUUID(), ""),
  );
  const [activeLine, setActiveLine] = useState<string>("");

  const addNewLine = () => {
    setLines((lines) => {
      lines.set(crypto.randomUUID(), "");
    });
  };

  useRegisterEditorKeybinds({
    handleKeyDown: (e) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          // moveUpLine();
          break;
        case "ArrowDown":
          e.preventDefault();
          // moveDownLine();
          break;
        case "Enter":
          e.preventDefault();
          addNewLine();
          break;
        default:
          break;
      }
    },
  });

  const setLineContent = (id: string, newContent: string) => {
    setLines((lines) => {
      if (lines.has(id)) lines.set(id, newContent);
    });
  };

  return (
    <div className="flex w-1/3 flex-col gap-1 ring-1 ring-green-400">
      {[...lines.keys()].map((lineId) => {
        const lineContent = lines.get(lineId);
        return (
          <Line
            key={lineId}
            id={lineId}
            setActiveLine={setActiveLine}
            lineContent={lineContent || ""}
            setLineContent={(newContent) => setLineContent(lineId, newContent)}
            isActive={lineId === activeLine}
          />
        );
      })}
    </div>
  );
}
