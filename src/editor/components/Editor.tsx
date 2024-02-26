import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

export function Editor() {
  return (
    <div className="w-full [&>*]:flex [&>*]:w-full [&>*]:justify-center">
      <EditorProvider
        extensions={extensions}
        editorProps={{
          attributes: {
            class:
              "flex w-1/3 flex-col gap-1 p-2 ring-1 ring-green-400 focus:outline-none",
          },
        }}
      >
        <></>
      </EditorProvider>
    </div>
  );
}
