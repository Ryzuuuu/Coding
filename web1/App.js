import { useState } from "react";
import "./App.css"; 
function App() {
  
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!newTodo) return; 

    setTodos([...todos, newTodo]);

    setNewTodo("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>

        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit">Add</button>
        </form>

       
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
