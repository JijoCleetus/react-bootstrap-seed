import React from 'react';
import logo from './logo.svg';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes/routes';

import './App.css';
import HomeComponent from './components/home';

function App() {
  return (
    <div>
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
