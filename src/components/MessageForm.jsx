import React, { useState } from "react";

export function MessageForm({ onSubmit, placeholder }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 p-2 border rounded"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Post</button>
    </form>
  );
}
