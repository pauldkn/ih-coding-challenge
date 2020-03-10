import React from 'react';
import './styles/App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="/customize-image">Customize Image</Link>
        <Link to="/celebrities">Celebrities</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;