"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");
  return (
    <div>
      <div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message..."
          className={classes["chat-input"]}
        ></input>
        <button
          onClick={() => sendMessage(message)}
          className={classes["send-button"]}
        >
          Send
        </button>
      </div>
      <div>
        {messages.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    </div>
  );
}
