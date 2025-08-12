import { useState } from 'react';

const blankGame = { title: '', platform: '' };
const blankErrors = { title: '', platform: '' };

function GameForm({ onAddGame }) {
  const [game, setGame] = useState(blankGame);
  const [errors, setErrors] = useState(blankErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = (name, value) => {
    let message = '';

    switch (name) {
      case 'title':
        if (value.trim().length === 0) {
          message = 'Title is required.';
        } else if (value.trim().length < 2) {
          message = 'Title must be longer.';
        }
        break;
      case 'platform':
        if (value.trim().length === 0) {
          message = 'Platform is required.';
        } else if (value.trim().length < 2) {
          message = 'Platform must be longer.';
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateFields(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(blankErrors);

    const newGame = {
      id: crypto.randomUUID(),
      title: game.title,
      platform: game.platform,
      isComplete: false,
    };

    onAddGame(newGame);
    setGame(blankGame);
  };

  const isFormValid = errors.title === '' && errors.platform === '';

  return (
    <div className="card shadow mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between align-items-start gap-2">
            <div className="flex-grow-1">
              <input
                value={game.title}
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="title" className="visually-hidden">
                Title:
              </label>
              {errors.title && (
                <span className="form-text text-warning">{errors.title}</span>
              )}
            </div>
            <div className="flex-grow-1">
              <input
                value={game.platform}
                type="text"
                name="platform"
                id="platform"
                className="form-control"
                placeholder="Platform"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="platform" className="visually-hidden">
                Platform:
              </label>
              {errors.platform && (
                <span className="form-text text-warning">
                  {errors.platform}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary text-nowrap"
              disabled={!isFormValid}>
              Add Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GameForm;
