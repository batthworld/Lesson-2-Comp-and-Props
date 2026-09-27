import { useState} from 'react'
// import {useState, useEffect} from 'react'
// import {Chatbot} from 'supersimpledev';
import { ChatInput } from'./components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'
import dayjs from 'dayjs';
    

     function App() {
        const [chatMessages, setChatMessages] = useState([
          {
            message: "hello chatbot",
            sender: "user",
            id: "id1",
            time: dayjs().valueOf(),
          },
          {
            message: "Hello! How can I help you?",
            sender: "robot",
            id: "id2",
            time: dayjs().valueOf(),
          },
          {
            message: "can you get me todays date?",
            sender: "user",
            id: "id3",
            time: dayjs().valueOf(),
          },
          {
            message: "Today is September 27",
            sender: "robot",
            id: "id4",
            time: dayjs().valueOf(),
          },
        ]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];
      
  

        return (
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
