import { useState } from "react";
import { Line } from "./Line";
import { useRegisterEditorKeybinds } from "../hooks/useRegisterEditorKeybinds";

export function Editor() {
  const [lineCount, setLineCount] = useState(1);
  const [activeLine, setActiveLine] = useState(0);

  const addNewLine = () => {
    setLineCount(lineCount + 1);
    setActiveLine(activeLine + 1);
  };

  const moveUpLine = () => {
    if (activeLine === 0) return;
    setActiveLine(activeLine - 1);
  };

  const moveDownLine = () => {
    if (activeLine === lineCount - 1) return;
    setActiveLine(activeLine + 1);
  };

  useRegisterEditorKeybinds({
    handleKeyDown: (e) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          moveUpLine();
          break;
        case "ArrowDown":
          e.preventDefault();
          moveDownLine();
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

  return (
    <div className="flex w-1/3 flex-col gap-1">
      {Array.from({ length: lineCount }, (_, i) => (
        <Line
          key={i}
          setActiveLine={setActiveLine}
          isActive={i === activeLine}
          lineNumber={i}
        />
      ))}
    </div>
  );
}
