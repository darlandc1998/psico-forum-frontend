import React, { useState } from 'react';
import { ContentHeader, TitleHeader } from './styles';
import Login from './Login';
import Profile from './Profile';

export default function Header() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <ContentHeader>
      <TitleHeader>PsicoFórum</TitleHeader>
      {!authenticated ? <Login /> : <Profile />}
    </ContentHeader>
  );
}
