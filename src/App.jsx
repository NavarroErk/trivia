// import { useState } from 'react';
import Home from './pages/Home';
// import { fetchLobbyCode } from './utils/functions';
// import { generateLobbyCode } from '../Server/apidata';
import './App.css'
import { Routes, Route } from "react-router-dom"




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
      // <Home></Home>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
  )
}

export default App
