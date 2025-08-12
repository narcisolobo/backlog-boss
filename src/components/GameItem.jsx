function GameItem({ game, onToggleIsComplete, onDelete }) {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <span className={game.isComplete ? 'text-muted' : ''}>
          {game.title} ({game.platform})
        </span>
        <div className="btn-group" role="group" aria-label="Actions">
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => onToggleIsComplete(game.id)}>
            {game.isComplete ? (
              <i className="bi bi-check-circle"></i>
            ) : (
              <i className="bi bi-check-circle-fill"></i>
            )}
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(game.id)}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default GameItem;
