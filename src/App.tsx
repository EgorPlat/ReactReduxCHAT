import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Chat from './Chat/Chat';
import { store } from './Store/Store';

function App() {

  const [ws, setWs] = useState<WebSocket>(new WebSocket('wss://immense-shore-69636.herokuapp.com/'));

  return (
    <div className="app">
     <Provider store={store}>
      <Chat ws={ws}/>
     </Provider>
    </div>
  );
}

export default App;
