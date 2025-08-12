import { useState } from 'react';
import GameForm from './GameForm';
import GameItem from './GameItem';
import FilterControls from './FilterControls';

function BacklogBoss() {
  const [games, setGames] = useState([]);
  const [showIncompleteOnly, setShowIncompleteOnly] = useState(false);

  const filteredGames = showIncompleteOnly
    ? games.filter((game) => !game.isComplete)
    : games;

  const handleAddGame = (newGame) => {
    setGames((prev) => [newGame, ...prev]);
  };

  const handleToggleIsComplete = (targetId) => {
    const toggledGames = games.map((game) => {
      if (game.id === targetId) {
        return { ...game, isComplete: !game.isComplete };
      }
      return game;
    });

    setGames(toggledGames);
  };

  const handleDelete = (targetId) => {
    const filteredGames = games.filter((game) => game.id !== targetId);
    setGames(filteredGames);
  };

  const handleShowIncomplete = () => {
    setShowIncompleteOnly((prev) => !prev);
  };

  return (
    <main>
      <GameForm onAddGame={handleAddGame} />
      {games.length === 0 ? (
        <p>No games. Add one above. </p>
      ) : (
        <div className="card shadow">
          <div className="card-body">
            <FilterControls
              onShowIncomplete={handleShowIncomplete}
              showIncompleteOnly={showIncompleteOnly}
            />
            <ul className="list-group">
              {filteredGames.map((game) => (
                <GameItem
                  key={game.id}
                  game={game}
                  onDelete={handleDelete}
                  onToggleIsComplete={handleToggleIsComplete}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}

export default BacklogBoss;
