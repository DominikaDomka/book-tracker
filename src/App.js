import React, { useState } from 'react';
import './App.css';

function App() {
  const [spineTitle, setSpineTitle] = useState('');
  const [fullTitle, setFullTitle] = useState('');

  const handleAddBook = () => {
    // Logic to add a book with the spineTitle and fullTitle
  };

  const handleSpineTitleChange = (e) => {
    setSpineTitle(e.target.value);
  };

  const handleFullTitleChange = (e) => {
    setFullTitle(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/bookshelf.jpg`} className="bookshelf" alt="Bookshelf" />

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Spine Title"
            value={spineTitle}
            onChange={handleSpineTitleChange}
          />
          <input
            type="text"
            placeholder="Enter Full Title"
            value={fullTitle}
            onChange={handleFullTitleChange}
          />
          <button onClick={handleAddBook}>Add Book</button>
        </div>

        <button>Pick Style</button>
      </header>
    </div>
  );
}

export default App;
