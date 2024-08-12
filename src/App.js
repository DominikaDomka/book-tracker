import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('spooky');
  const [selectedBook, setSelectedBook] = useState(null);

  const bookWidth = 20; // Width of each book spine in pixels
  const bookHeight = 100; // Height of each book spine in pixels
  const bookSpacing = 0; // Space between books in pixels

  const categories = {
    spooky: { count: 10, color: '#7D5A5A' },
    fantasy: { count: 14, color: '#3D8361' },
    soft: { count: 7, color: '#F2D8D8' },
    colorful: { count: 13, color: '#FD8A8A' }
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (title.trim() && author.trim()) {
      const newBook = {
        id: Date.now(),
        title: title.trim(),
        author: author.trim(),
        category,
        progress: 0,
        color: categories[category].color
      };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
    }
  };

  const updateProgress = (id, progress) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, progress } : book
    ));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <div className="bookshelf">
        <img src="/bookshelf.jpg" alt="Bookshelf" className="bookshelf-image" />
        <div className="books-container">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="book"
              style={{
                backgroundColor: book.color,
                width: `${bookWidth}px`,
                height: `${bookHeight}px`,
                left: `${index * (bookWidth + bookSpacing)}px`
              }}
              onClick={() => setSelectedBook(book)}
            >
              <div className="spine-text">{book.author}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Object.keys(categories).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={addBook}>Add Book</button>
      </div>
      {selectedBook && (
        <div className="book-details">
          <h2>{selectedBook.title}</h2>
          <p>Author: {selectedBook.author}</p>
          <input
            type="range"
            min="0"
            max="100"
            value={selectedBook.progress}
            onChange={(e) => updateProgress(selectedBook.id, parseInt(e.target.value))}
          />
          <p>Progress: {selectedBook.progress}%</p>
          <button onClick={() => deleteBook(selectedBook.id)}>Delete</button>
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;