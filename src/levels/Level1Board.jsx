import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { MessageForm } from "../components/MessageForm";
import { MessageList } from "../components/MessageList";

export function Level1Board() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  async function addMessage(text) {
    await addDoc(collection(db, "messages"), {
      text,
      likes: 0,
      createdAt: serverTimestamp(),
    });
  }

  async function likeMessage(msg) {
    const ref = doc(db, "messages", msg.id);
    await updateDoc(ref, { likes: (msg.likes ?? 0) + 1 });
  }

  async function deleteMessage(id) {
    await deleteDoc(doc(db, "messages", id));
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Level 1 — Working board</h2>
      <MessageForm onSubmit={addMessage} placeholder="Post a message" />
      <MessageList
        messages={messages}
        onLike={likeMessage}
        onDelete={deleteMessage}
      />
    </>
  );
}
