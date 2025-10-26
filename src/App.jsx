import { triviaQuestions } from '../Server/apidata'
import './App.css'

function App() {

  const clientSocket = new WebSocket("ws://localhost:8080");

  clientSocket.addEventListener("open", (e) => {
    clientSocket.send("Hello from clientSocket!");
  });

  console.log(triviaQuestions);
  
  
  return (
    <>
  
    </>
  )
}

export default App
