import Chat from "components/Chat";
import Sidebar from "components/Sidebar";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import instance from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    instance.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  console.log(messages);

  useEffect(() => {
    const pusher = new Pusher("5bd74e8e8a0bd4d2129e", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div
      className="App"
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "lightGray",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#ffffd9",
          marginTop: "-50px",
          height: "90vh",
          width: "90vw",
          boxShadow: "-1px 4px 20px -6px rgba(0,0,0,0.75)",
          position: "relative",
        }}
      >
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
