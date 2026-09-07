"use client";

import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

// Import động và tắt SSR
const CodeEditorDynamic = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

interface EditorProps {
  value: string;
  onChange: (val: string) => void;
  language?: string;
}

export default function CodeEditor({ value, onChange, language = "javascript" }: EditorProps) {
  return (
    <div className="w-full border rounded-lg overflow-hidden bg-[#161b22] p-4" data-color-mode="dark">
      <CodeEditorDynamic
        value={value}
        language={language}
        placeholder="Nhập code của bạn tại đây..."
        onChange={(ev) => onChange(ev.target.value)}
        padding={15}
        style={{
          fontSize: 14,
          backgroundColor: "#161b22",
          fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        }}
      />
    </div>
  );
}
