import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import React from "react";

type TextFormatType =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "subscript"
  | "superscript"
  | "code";

const Toolbar = () => {
  const [editor] = useLexicalComposerContext();

  const applyFormatting = (formatType: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
  };

  return (
    <section className="mb-2 flex space-x-2 rounded bg-zinc-100 p-2">
      <button
        onClick={() => applyFormatting("bold")}
        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
      >
        Bold
      </button>
      <button
        onClick={() => applyFormatting("italic")}
        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
      >
        Italic
      </button>
      <button
        onClick={() => applyFormatting("underline")}
        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
      >
        Underline
      </button>
    </section>
  );
};

export default Toolbar;
