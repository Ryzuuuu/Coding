import { useState } from "react";
import "./App.css"; // We will use this for styling

function App() {
  // State to store the list of to-do items
  const [todos, setTodos] = useState([]);

  // State to store the value of the input field
  const [newTodo, setNewTodo] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    if (!newTodo) return; // Don't add empty todos

    // Add the new to-do to the list
    setTodos([...todos, newTodo]);

    // Clear the input field after adding
    setNewTodo("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>

        {/* Form to add a new to-do */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit">Add</button>
        </form>

        {/* List of to-dos */}
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
