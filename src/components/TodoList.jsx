import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState(['Comprar leite', 'Estudar React', 'Fazer exercício', 'Ler um livro']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="todo-list-container">
      <h1>Minha Lista de Tarefas</h1>
      <div className="add-task-container">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button className="add-btn" onClick={handleAddTask}>
          Adicionar
        </button>
      </div>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TodoList;