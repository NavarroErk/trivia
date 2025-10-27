// import { triviaQuestions } from '../Server/apidata'
import './App.css'

function App() {
  // document.querySelector("#p").textContent = 'p'


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


  // console.log(triviaQuestions);

  return (
    <>
      <p id='p'></p>
    </>

  )
}

export default App
