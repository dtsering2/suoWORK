import './App.css';
import React from 'react';
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { UserChannelContainer, UserChannelListContainer} from './exportFiles'

const api_key = 'f7vcthw3rfvw' //initialize our chat
const curr_Client = StreamChat.getInstance(api_key) 

function App() {
  
  return (
    <div className="app_container">
      <Chat client = {curr_Client} theme = "black">
        <UserChannelListContainer

        />
        <UserChannelContainer

        />  
      </Chat>    
    </div>
  );
}

export default App;
