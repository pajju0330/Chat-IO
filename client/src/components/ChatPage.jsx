import React from "react";
import "./ChatPage.css";
import io from "socket.io-client";
const socket = io.connect("https://chatio-backend-7564.onrender.com");
const ChatPage = ({username}) => {
  const [message, setMessage] = React.useState("");
  const [details, setDetails] = React.useState([]);
  React.useEffect(() => {
    socket.on("chat", (serverMessage) => {
      setDetails([...details, serverMessage]);
    });
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat", {
      message,
      user: username,
    });
    setDetails([
      ...details,
      {
        message,
        user: username,
      },
    ]);
    setMessage("");
  };
  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <div className="topBar">topBar coming soon..</div>
        <div className="content">
          {console.log(details)}
          {details &&
            details.map((item) => {
              return (
                <div
                  className={
                    item.user === username
                      ? "chat rightDirection"
                      : "chat leftDirection"
                  }
                >
                  <p>{item.user}</p>
                  {item.message}
                </div>
              );
            })}
        </div>
        <div className="bottomBar">
          <input
            className="input"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Enter your message"
          />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
