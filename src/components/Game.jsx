import { useEffect, useRef, useState } from 'react';
import { getCharactersById } from '../utils/getCharactersById';
import shuffle from '../utils/shuffle';
import Score from './Score';
import Card from './Card';
import GameOverDialog from './GameOverDialog';
import '../styles/Game.css';

const TOTAL_CARDS = 12;

function Game() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameWon, setIsGameWon] = useState(null);

  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    resetGame();
  };

  function handleCardClick(char) {
    if (!clickedCards.includes(char)) {
      setClickedCards([...clickedCards, char]);

      const newScore = currentScore + 1;
      setCurrentScore(newScore);

      if (newScore > bestScore) setBestScore(newScore);

      const shuffleChars = shuffle(characters);
      setCharacters(shuffleChars);

      if (newScore === TOTAL_CARDS) {
        setIsGameWon(true);
        openDialog();
      }
    } else {
      setClickedCards([]);
      setCurrentScore(0);

      const shuffleChars = shuffle(characters);
      setCharacters(shuffleChars);

      setIsGameWon(false);
      openDialog();
    }
  }

  function resetGame() {
    setClickedCards([]);
    setCurrentScore(0);
    setIsGameWon(null);
  }

  useEffect(() => {
    // 1. Declare the async function inside the effect
    const fetchCharacters = async () => {
      try {
        const demonSlayerId = 38000;

        const charRes = await fetch(
          `https://api.jikan.moe/v4/anime/${demonSlayerId}/characters`,
        );
        const charData = await charRes.json();

        const specificCharacters = getCharactersById(charData.data);
        setCharacters(specificCharacters);

        setIsLoading(false); // Data has arrived, update state
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setIsLoading(false); // Fetch failed, update state
      }
    };

    // 2. Invoke it immediately
    fetchCharacters();
  }, []); // 3. Empty dependency array makes it only run once

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <div className="cards-container">
        {characters.map((char) => (
          <Card
            key={char.character.mal_id}
            id={char.character.mal_id}
            name={char.character.name}
            img={char.character.images.webp.image_url}
            handleClick={() => handleCardClick(char)}
          />
        ))}
      </div>
      <GameOverDialog
        dialogRef={dialogRef}
        openDialog={openDialog}
        closeDialog={closeDialog}
        isGameWon={isGameWon}
      />
    </>
  );
}

export default Game;
