import { useState } from 'react';
import './App.css'

function App() {
  document.querySelector("#p").textContent = 'p'
  const [text, setText] = useState("p")


  const clientSocket = new WebSocket("ws://localhost:3000");

  clientSocket.onopen = (e) =>{
    console.log('WebSocket connection opened: ', e);
    clientSocket.send(`This is a msg from client`)    
  }
  clientSocket.onmessage = (e) => {
    console.log(e);
  }
  clientSocket.onclose = (e) => {
    console.log('websocket connection closed', e);
  }
  clientSocket.onerror = (error) => {
    console.log('Websocket error:', error);
  }

async function fetchAllTrivia(){
  const url = `http://localhost:3000/api/trivia-data`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

// fetchAllTrivia()


async function fetchTriviaWithDifficulty(category) {
  const url = `http://localhost:3000/api/trivia-data/${category}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// fetchTriviaWithDifficulty('easy');




  return (
    <>
      <p id='p'>{text}</p>
    </>

  )
}

export default App
