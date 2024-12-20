"use client";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import {
  INSERT_TABLE_COMMAND,
  TableCellNode,
  TableNode,
  TableRowNode,
} from "@lexical/table";
import { LexicalEditor } from "lexical";
import { useEffect, useState } from "react";

import BaseTheme from "./themes/BaseTheme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [TableNode, TableCellNode, TableRowNode],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // The editor theme
  theme: BaseTheme,
};

const $updateEditorState = (editor: LexicalEditor) => {
  editor.dispatchCommand(INSERT_TABLE_COMMAND, {
    columns: String(3),
    includeHeaders: true,
    rows: String(3),
  });
};

function InsertTable({
  showTable,
  setShowTable,
}: {
  showTable: boolean;
  setShowTable: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!showTable) {
      setShowTable(true);
    }
  }, [showTable, setShowTable]);

  useEffect(() => {
    if (showTable) {
      $updateEditorState(editor);
    }
  }, [editor, showTable]);
  return <></>;
}

function Placeholder() {
  return (
    <div className="editor-placeholder absolute left-4 top-4 text-zinc-500">
      메모 작성...
    </div>
  );
}

export default function Editor() {
  const [showTable, setShowTable] = useState<boolean>(false);
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container w-full">
        <ToolbarPlugin />
        <div className="editor-inner relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="editor-input h-32 rounded-2xl border border-solid border-purple-500 bg-zinc-800 p-4" />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <InsertTable showTable={showTable} setShowTable={setShowTable} />
        </div>
      </div>
    </LexicalComposer>
  );
}
