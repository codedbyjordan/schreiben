export function moveCursorToEnd(el: HTMLElement, offset?: number) {
  const range = document.createRange();
  const selection = window.getSelection();
  range.setStart(el, offset || el.childNodes.length);
  range.collapse(true);
  selection?.removeAllRanges();
  selection?.addRange(range);
}
