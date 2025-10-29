import { lobbyCodesArr } from "./apidata.js";

export function generateLobbyCode() {
  let lobbyCode = Math.floor(Math.random() * 5);

  lobbyCodesArr.forEach((code) => {
    if (lobbyCode == code) {
      generateLobbyCode();
    } else {
      lobbyCodesArr.push(lobbyCode);
    }
  });
  return [lobbyCode, lobbyCodesArr];
}
