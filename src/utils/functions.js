export async function fetchLobbyCode() {
  const url = "http://localhost:3000/api/lobby-code/";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // throw new Error(`HTTP error! Status: ${response.status}`)
      throw new Error("idk");
    }
    const data = await response.text();
    console.log("Lobby Code: ", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
