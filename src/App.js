import React from 'react';
import './App.css';
import bookshelf from './bookshelf.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bookshelf} className="bookshelf" alt="Bookshelf" />
        <div className="input-fields">
          {/* Your input fields here */}
        </div>
      </header>
    </div>
  );
}

export default App;
