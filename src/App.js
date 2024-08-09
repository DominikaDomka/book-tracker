// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/bookshelf.jpg`} className="bookshelf" alt="Bookshelf" />
        {/* Other components and code */}
      </header>
    </div>
  );
}

export default App;
