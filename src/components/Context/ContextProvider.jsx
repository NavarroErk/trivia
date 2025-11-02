import { useState } from "react";
import { Context } from "./Context";

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [lobbyCode, setLobbyCode] = useState(null);
  return (
    <Context.Provider
      value={{ user, setUser, socket, setSocket, lobbyCode, setLobbyCode }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
