import React, { useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";
import { updateDoc, serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: serverTimestamp(),
        user: user.displayName,
        userimage: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message to #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;