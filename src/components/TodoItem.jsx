import { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div className={`todo-item ${isCompleted ? 'completed' : ''}`}>
      <p>{task}</p>
      {!isCompleted && (
        <button className="complete-btn" onClick={handleComplete}>
          Concluir
        </button>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
};

export default TodoItem;
