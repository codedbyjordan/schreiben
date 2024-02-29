import { useActiveFileStore } from "@/file-explorer/hooks/useActiveFileStore";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";

const extensions = [StarterKit, Markdown];

export function Editor() {
  const { activeFile } = useActiveFileStore();
  const editor = useEditor(
    {
      extensions,
      editorProps: {
        attributes: {
          class: "flex w-full flex-col px-12 py-6 focus:outline-none",
        },
      },
      content: activeFile.contents,
    },
    [activeFile.contents],
  );
  return (
    <div className="w-full [&>*]:flex [&>*]:w-full [&>*]:justify-center">
      <EditorContent editor={editor} />
    </div>
  );
}
