import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './Books'
import { Switch, Route, Link } from 'react-router-dom'
import BookShow from './BookShow'
import NewBook from './NewBook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/books">Books</Link></p>
          <p><Link to="/books/new">New Book</Link></p>
          <Switch>
            <Route path="/books/new" exact component={NewBook} />
            <Route path="/books/:id" exact component={BookShow} />
            <Route path="/books" exact component={Books} />
            <Route path="/" exact render={() => <h2>This is the home page.</h2>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
