import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/bookshelf.jpg`} className="Bookshelf-image" alt="Bookshelf" />
        <h1>Book Tracker</h1>
        {/* Your input fields and buttons here */}
        <button>Add Book</button>
        <button>Pick Style</button>
        <div className="inputs">
          <input type="text" placeholder="Spine Title" />
          <input type="text" placeholder="Full Title" />
        </div>
      </header>
    </div>
  );
}

export default App;
