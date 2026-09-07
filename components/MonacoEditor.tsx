"use client";

import dynamic from "next/dynamic";

// Tắt SSR cho Monaco Editor
const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

interface MonacoProps {
  value: string;
  onChange: (val: string | undefined) => void;
  language?: string;
}

export default function MonacoEditor({ value, onChange, language = "javascript" }: MonacoProps) {
  return (
    <div className="h-[400px] w-full border rounded-lg overflow-hidden">
      <Editor
        height="100%"
        language={language}
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
        }}
      />
    </div>
  );
}
