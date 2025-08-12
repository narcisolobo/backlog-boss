import { useState } from 'react';
import GameForm from './GameForm';

function BacklogBoss() {
  const [games, setGames] = useState([]);

  return (
    <main>
      <GameForm />
      {games.length === 0 ? (
        <p>No games. Add one above. </p>
      ) : (
        games.map((game) => <p>{game.title}</p>)
      )}
    </main>
  );
}

export default BacklogBoss;
