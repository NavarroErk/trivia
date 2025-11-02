import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../components/Context/Context";

function HomeBtn({ onClickFct, id, className, text }) {
  return (
    <button onClick={onClickFct} id={id} className={className}>
      {text}
    </button>
  );
}

function Home() {
  const { user, setUser, lobbyCode, setLobbyCode, socket, setSocket } =
    useContext(Context);

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
