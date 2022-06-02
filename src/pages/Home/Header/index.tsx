import React, { useState } from 'react';
import { ContentHeader, TitleHeader } from './styles';
import Login from './Login';
import Logged from './Logged';

export default function Header() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <ContentHeader>
      <TitleHeader>PsicoFórum</TitleHeader>
      {!authenticated ? <Login /> : <Logged />}
    </ContentHeader>
  );
}
