import React from 'react';
import './styles/rsuite';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

export default function App() {
  return (
    <div id="rootChildren">
      <Home />
      <GlobalStyle />
    </div>
  );
}
