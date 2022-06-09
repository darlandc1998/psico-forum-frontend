import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from './hooks';
import Routes from './routes';
import './styles/rsuite';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <div id="rootChildren">
    <Router>
      <AppProviders>
        <Routes />
      </AppProviders>
      <GlobalStyle />
    </Router>
  </div>
);

export default App;
