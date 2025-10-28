// import { useState } from 'react';
import { fetchLobbyCode } from '../utils/functions';
import { generateLobbyCode } from '../../Server/apidata';
import { Link } from 'react-router-dom';



function HomeBtn({onClickFct, id, className, text}) {
  return (
    <button onClick={onClickFct} 
    id={id} className={className}>{text}</button>

  )
}


function Home(){
    async function fetchAllTrivia(){
  const url = `http://localhost:3000/api/trivia-data`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

// fetchAllTrivia()


async function fetchTriviaWithDifficulty(category) {
  const url = `http://localhost:3000/api/trivia-data/${category}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response.status}`);
      throw new Error('idk2')
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
          <h1>TRIVIA</h1>
          <div className="div-lobby-create">
            <HomeBtn onClickFct={() => {
              console.log('join clicked');
            }} id='btn-join-lobby' className='div-lobby-action' text='JOIN'></HomeBtn>
            <HomeBtn onClickFct={fetchLobbyCode} id='btn-host-lobby' className='div-lobby-action' text='HOST'></HomeBtn>
          </div>
        </>
    
      )
}

export default Home