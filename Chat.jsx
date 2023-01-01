import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from './firebase'
import './Chat.css'
import ChatInput from './ChatInput'
import Message from './Message'


function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
	
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, user, userImage, timestamp }) => (
          <Message
            message={message}
            user={user}
            userImage={userImage}
            timestamp={timestamp}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat