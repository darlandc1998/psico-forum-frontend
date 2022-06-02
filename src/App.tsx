import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './styles/rsuite';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <div id="rootChildren">
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </div>
  );
}
