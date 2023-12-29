import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID library

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(() => {
      return [
        ...todos,
        { id: uuidv4(), title: newItem, completed: false }, // Use uuidv4() to generate a unique ID
      ];
    });
    setNewItem('');
  }

  function toggleTodo (id, completed) {
    setTodos(() => {
      return todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo (id) {
    setTodos(() => {
      return todos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <div className='body-background'>
    <div className='wrapper'>
      <div className="App">
        <form onSubmit={handleSubmit} className='new-item-form'>
          <div className='form-row'>
            <label htmlFor='new-item-input'>New Item</label>
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type='text'
              id='item'
            />
          </div>
          <button className="btn">Add</button>
        </form>
      </div>
     <div className='Todo'>
     <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && <li className='list-item'>No items yet!</li>}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input checked={todo.completed} onChange={ e => toggleTodo(todo.id,e.target.checked)} type='checkbox' />
                {todo.title}
              </label>
              <button className='deleteBttn' onClick={() => deleteTodo(todo.id)} >Delete</button>
            </li>
          );
        })}
      </ul>
     </div>
     </div>
     </div>
    </>
  );
}

export default App;
