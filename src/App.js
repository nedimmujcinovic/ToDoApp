import './App.css';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <input type="checkbox" />
            <span>{task}</span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
