import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div id="home">
        <h1 id="welcome-message">WELCOME MESSAGE</h1>
        <section id="home-lobby-btns">
          <button>Create Lobby</button>
          <button>Join Lobby</button>
        </section>
      </div>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default App;
