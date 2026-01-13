import React, { useState } from "react";
import { MessageForm } from "../components/MessageForm";
import { MessageList } from "../components/MessageList";

export function Level3Board() {
  const [messages, setMessages] = useState([]);

  // TODO: useEffect + onSnapshot
  // TODO: addMessage
  // TODO: likeMessage
  // TODO: deleteMessage

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">
        Level 3 — Build it yourself
      </h2>
      <MessageForm onSubmit={() => {}} placeholder="Post a message" />
      <MessageList messages={messages} onLike={() => {}} onDelete={() => {}} />
    </>
  );
}
