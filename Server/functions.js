import { lobbyCodesArr } from "./apidata.js";
import { triviaQuestions } from "./apidata.js";
import fs from "fs";

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

export function writeTriviaDataToJsonFile() {
  const fileName = "./data/trivia-qa.json";
  fs.writeFile(fileName, JSON.stringify(triviaQuestions, null, 2), (err) => {
    if (err) {
      console.error("Error writing file");
    } else {
      console.log("Successfully wrote data.");
    }
  });
}
