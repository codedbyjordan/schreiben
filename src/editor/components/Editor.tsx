import { useActiveFileStore } from "@/file-explorer/hooks/useActiveFileStore";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

export function Editor() {
  const { activeFile } = useActiveFileStore();

  return (
    <div className="w-full [&>*]:flex [&>*]:w-full [&>*]:justify-center">
      <EditorProvider
        extensions={extensions}
        editorProps={{
          attributes: {
            class: "flex w-full flex-col px-12 py-6 focus:outline-none",
          },
        }}
        content={activeFile.contents}
      >
        <></>
      </EditorProvider>
    </div>
  );
}
