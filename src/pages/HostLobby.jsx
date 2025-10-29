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

  return <div>Host Lobby</div>;
}

export default HostLobby;
