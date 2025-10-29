import { Link } from "react-router-dom";

function HomeBtn({ onClickFct, id, className, text }) {
  return (
    <button onClick={onClickFct} id={id} className={className}>
      {text}
    </button>
  );
}

function Home() {
  async function fetchAllTrivia() {
    const url = `http://localhost:3000/api/trivia-data`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // fetchAllTrivia()

  async function fetchTriviaWithDifficulty(category) {
    const url = `http://localhost:3000/api/trivia-data/${category}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // throw new Error(`HTTP error! status: ${response.status}`);
        throw new Error("idk2");
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
      <h2>HOME</h2>
      <div className="div-lobby-create">
        <Link to="/lobby" id="btn-join-lobby" type="join-lobby">
          Join Lobby
        </Link>
        <Link to="/host-lobby" id="btn-host-lobby" type="host-lobby">
          Host Lobby
        </Link>
      </div>
    </>
  );
}

export default Home;
