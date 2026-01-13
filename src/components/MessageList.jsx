import React from "react";

export function MessageList({ messages, onLike, onDelete }) {
  return (
    <ul className="space-y-2">
      {messages.map((m) => (
        <li
          key={m.id}
          className="p-3 bg-white rounded shadow-sm flex justify-between"
        >
          <div>
            <div className="font-medium">{m.text}</div>
            <div className="text-xs text-gray-500">Likes: {m.likes ?? 0}</div>
          </div>
          <div className="flex gap-2">
            <button
              className="px-2 py-1 border rounded"
              onClick={() => onLike(m)}
            >
              👍
            </button>
            <button
              className="px-2 py-1 border rounded"
              onClick={() => onDelete(m.id)}
            >
              🗑
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
