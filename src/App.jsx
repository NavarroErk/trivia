// import { useState } from 'react';
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import HostLobby from "./pages/HostLobby";
import CreateTrivia from "./pages/CreateTrivia";

// import { fetchLobbyCode } from './utils/functions';
// import { generateLobbyCode } from '../Server/apidata';
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [text, setText] = useState("p")

  // const clientSocket = new WebSocket("ws://localhost:3000");

  // clientSocket.onopen = (e) =>{
  //   console.log('WebSocket connection opened: ', e);
  //   clientSocket.send(`This is a msg from client`)
  // }
  // clientSocket.onmessage = (e) => {
  //   console.log(e);
  // }
  // clientSocket.onclose = (e) => {
  //   console.log('websocket connection closed', e);
  // }
  // clientSocket.onerror = (error) => {
  //   console.log('Websocket error:', error);
  // }

  // const btnHostLobby = document.querySelector("#btn-host-lobby")
  // btnHostLobby.addEventListener('click', () => {
  //   fetchLobbyCode()
  // })

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/host-lobby" element={<HostLobby />}></Route>
      <Route path="/create-trivia" element={<CreateTrivia />}></Route>
      <Route path="/lobby" element={<Lobby />}></Route>
    </Routes>
  );
}

export default App;
