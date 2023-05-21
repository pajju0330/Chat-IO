
import './App.css';

import React from 'react';
import io from 'socket.io-client'
import {nanoid} from "nanoid"
const socket = io.connect("http://localhost:5000")
const username = nanoid(4)

function Group({title, setGroup}) {
  const [message, setMessage] = React.useState("")
  const [chat, setChat] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit(title, {message,username});
    setMessage(""); 
  }
  React.useEffect(()=>{
    socket.on(title, (serverMessage)=>{
      setChat([...chat,serverMessage]);
    })
})

  return (
    <div className="App">
      <header className="App-header">
        {title}
        {chat && chat.map((data) => {
          return (
            <div className='data'>
            <p>{data.message}</p>
            <p id='user'>id:{data.username}</p>
            </div>
          )
        })}
        <form onSubmit={handleSubmit}>
          <input type='text' name='message' value={message} onChange={(e)=>{
            setMessage(e.target.value)
          }} placeholder='write your message' />
          <div className='chooseGrp'>
            <button onClick={()=> setGroup('none')} >back</button>
            <button type='submit'>submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default Group;
