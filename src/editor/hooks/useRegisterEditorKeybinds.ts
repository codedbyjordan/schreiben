import { useEffect } from "react";

type EditorKeybinds = {
  handleKeyDown: (e: KeyboardEvent) => void;
};

export function useRegisterEditorKeybinds({ handleKeyDown }: EditorKeybinds) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
}
