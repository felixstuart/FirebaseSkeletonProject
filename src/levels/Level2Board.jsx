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

export function Level2Board() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // TODO #1 (FILL IN THE BLANKS ONLY)
    // Replace the ??? so this query works
    const q = query(
      collection(db, "???"), // name of the collection
      orderBy("???", "desc") // field to sort by
    );

    // Everything below is DONE
    const unsub = onSnapshot(q, (snap) => {
      setMessages(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }))
      );
    });

    return unsub;
  }, []);

  async function addMessage(text) {
    // TODO #2 (ALREADY MOSTLY DONE)
    await addDoc(collection(db, "messages"), {
      text: "some text",
      likes: 0,
      createdAt: serverTimestamp(),
    });
  }

  async function likeMessage(msg) {
    const ref = doc(db, "messages", msg.id);

    // TODO #3 (Increment the likes)
    await updateDoc(ref, {
      likes: msg.likes,
    });
  }

  async function deleteMessage(id) {
    // TODO #4 (ONE WORD CHANGE)
    await deleteDoc(doc(db, "messages", id));
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">
        Level 2 — Fill in the blanks
      </h2>

      <MessageForm onSubmit={addMessage} placeholder="Post a message" />

      <MessageList
        messages={messages}
        onLike={likeMessage}
        onDelete={deleteMessage}
      />
    </>
  );
}
