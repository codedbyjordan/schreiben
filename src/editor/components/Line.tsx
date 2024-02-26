import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { turndownService } from "../../turndownService";
import { parseAndSanitizeLine } from "../helpers/parseAndSanitizeLine";
import { moveCursorToEnd } from "../utils/moveCursorToEnd";

type LineProps = {
  setActiveLine: Dispatch<SetStateAction<string>>;
  isActive: boolean;
  id: string;
  setLineContent: (newContent: string) => void;
  lineContent: string;
};

export function Line({
  setActiveLine,
  isActive,
  id,
  setLineContent,
  lineContent,
}: LineProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  const formatLine = async () => {
    if (!lineRef.current) return;
    const text = lineRef.current?.innerHTML;
    const formatted = await parseAndSanitizeLine(text);
    setLineContent(formatted);
  };

  useEffect(() => {
    if (!lineRef.current || !isActive) return;
    lineRef.current.focus();
    const sanitizedHtml = turndownService.turndown(lineContent);
    setLineContent(sanitizedHtml);
  }, [lineRef, isActive]);

  useEffect(() => {
    if (!lineRef.current || !isActive) return;
    moveCursorToEnd(lineRef.current);
  }, [lineContent, isActive]);

  return (
    <div
      className="editor-line w-full focus:outline-none"
      contentEditable="true"
      ref={lineRef}
      dangerouslySetInnerHTML={{ __html: lineContent }}
      onBlur={formatLine}
      onFocus={() => setActiveLine(id)}
    />
  );
}
