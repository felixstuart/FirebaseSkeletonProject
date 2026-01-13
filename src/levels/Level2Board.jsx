import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { MessageForm } from "../components/MessageForm";
import { MessageList } from "../components/MessageList";

export function Level2Board() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // TODO: set up onSnapshot listener ordered by createdAt
    setMessages([]);
  }, []);

  async function addMessage(text) {
    // TODO: addDoc with { text, likes: 0, createdAt }
  }

  async function likeMessage(msg) {
    // TODO: update likes using updateDoc
  }

  async function deleteMessage(id) {
    // TODO: deleteDoc
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Level 2 — Fill the TODOs</h2>
      <MessageForm onSubmit={addMessage} placeholder="Post a message (TODO)" />
      <MessageList
        messages={messages}
        onLike={likeMessage}
        onDelete={deleteMessage}
      />
    </>
  );
}
