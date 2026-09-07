"use client";

import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  const [code, setCode] = useState(`function sayHello() {\n  console.log("Hello, World!");\n}`);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">React Code Editor</h1>
      <CodeEditor value={code} onChange={setCode} language="javascript" />
      <div className="mt-4">
        <h3 className="font-semibold">Kết quả State:</h3>
        <pre className="bg-gray-100 p-2 rounded mt-1 text-xs whitespace-pre-wrap">{code}</pre>
      </div>
    </main>
  );
}
