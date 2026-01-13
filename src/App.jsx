import React, { useState } from "react";
import { Level1Board } from "./levels/Level1Board";
import { Level2Board } from "./levels/Level2Board";
import { Level3Board } from "./levels/Level3Board";

export default function App() {
  const [level, setLevel] = useState(1);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Firebase Club Board</h1>
        <p className="text-sm text-gray-600 mb-4">
          Post messages and upvote them — 3 teaching levels
        </p>

        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((l) => (
            <button
              key={l}
              className={`px-3 py-1 rounded ${
                level === l ? "bg-blue-600 text-white" : "bg-white border"
              }`}
              onClick={() => setLevel(l)}
            >
              Level {l}
            </button>
          ))}
        </div>

        {level === 1 && <Level1Board />}
        {level === 2 && <Level2Board />}
        {level === 3 && <Level3Board />}
      </div>
    </div>
  );
}
