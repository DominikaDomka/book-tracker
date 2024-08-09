import React, { useState } from 'react';
import './App.css';
import bookshelfImage from './bookshelf.jpg';

function App() {
  const [spineTitle, setSpineTitle] = useState('');
  const [fullTitle, setFullTitle] = useState('');

  const addBook = () => {
    console.log('Add book:', spineTitle, fullTitle);
  };

  const pickStyle = () => {
    console.log('Pick style');
  };

  return (
    <div className="App">
      <img src={bookshelfImage} alt="Bookshelf" className="bookshelf" />
      <div className="controls">
        <input
          type="text"
          placeholder="Spine Title"
          value={spineTitle}
          onChange={(e) => setSpineTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Full Title"
          value={fullTitle}
          onChange={(e) => setFullTitle(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
        <button onClick={pickStyle}>Pick Style</button>
      </div>
    </div>
  );
}

export default App;
