import React, { useEffect } from "react";

function HostLobby() {
  useEffect(() => {
    fetchLobbyCode();
  }, []);
  async function fetchLobbyCode() {
    const url = "http://localhost:3000/api/lobby-code/";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      console.log(`Code: ${data}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchAllTrivia() {
    const url = `http://localhost:3000/api/trivia-data`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `HTTP error!fetchAllTrivia() Status: ${response.status}`
        );
      }
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // fetchAllTrivia()

  async function fetchTriviaByDifficulty(difficulty) {
    const url = `http://localhost:3000/api/trivia-data/${difficulty}`;
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

  // fetchTriviaByDifficulty('easy');

  return (
    <>
      <div>Host Lobby</div>
      <button onClick={fetchAllTrivia}>CLICK FOR ALL TRIVIA</button>
      <input type="text" />
      <button>CLICK FOR TRIVIA BY DIFFICULTY</button>
    </>
  );
}

export default HostLobby;
