import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './styles/rsuite';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <div id="rootChildren">
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </div>
);

export default App;
