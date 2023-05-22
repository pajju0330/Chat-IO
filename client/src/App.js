import "./App.css";

import React from "react";
import ChatPage from "./components/ChatPage";

function App() {
  const [join, setJoin] = React.useState(false);
  const [nickname, setNickname] = React.useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
      if(!nickname){
         alert('Please enter a nickname to join the chat')
         return
      }
      setJoin(true);
  }
  if (!join) {
    return (
      <div className="App">
        <div className="App-header">
          <div>Welcome to WCE Chat-IO</div>
          <div className="chooseGrp" style={{margin:'0'}} >
              <input placeholder="Enter your nickname" value={nickname} onChange={(e) => {
                setNickname(e.target.value);
              }}/>
          </div>
          <button type="submit" onClick={handleSubmit}>Join</button>
        </div>
      </div>
    );
  } else {
    return (
      <ChatPage username={nickname}/>
    )
  }
}

export default App;
