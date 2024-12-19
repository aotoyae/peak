// components/Editor.tsx
"use client";

import React, { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState } from "lexical";
import Toolbar from "./plugins/Toolbar";

const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    onError: (error: Error) => {
      console.error("Lexical Error: ", error);
    },
  };

  const handleEditorChange = (editorState: EditorState) => {
    editorState.read(() => {
      const json = editorState.toJSON();
      console.log("Editor State:", json);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar />
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="editor h-32 w-full rounded-2xl border border-solid border-purple-500 bg-zinc-800 p-4" />
        }
        placeholder={<div>Start typing...</div>}
        ErrorBoundary={() => (
          <div>
            <h2>Something went wrong.</h2>
            <p>error</p>
          </div>
        )}
      />
      <HistoryPlugin />
      <OnChangePlugin onChange={handleEditorChange} />
    </LexicalComposer>
  );
};

export default Editor;
