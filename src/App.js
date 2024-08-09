import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Bookshelf from './Bookshelf'; // assuming you have this component
import AddBook from './AddBook'; // assuming you have this component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Bookshelf} />
            <Route path="/add" component={AddBook} />
            {/* Add more routes as needed */}
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
