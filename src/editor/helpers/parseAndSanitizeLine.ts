import DOMPurify from "dompurify";
import { parse } from "marked";

export async function parseAndSanitizeLine(text: string) {
  const parsedMarkdown = await parse(text);
  const sanitizedHtml = DOMPurify.sanitize(parsedMarkdown);
  return sanitizedHtml;
}
