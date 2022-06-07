import React, { useState } from 'react';
import { ContainerHeader, ContentHeader, TitleHeader } from './styles';
import Login from './Login';
import Logged from './Logged';

const Header: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <ContainerHeader>
      <ContentHeader>
        <TitleHeader>PsicoFórum</TitleHeader>
        {!authenticated ? <Login /> : <Logged />}
      </ContentHeader>
    </ContainerHeader>
  );
};

export default Header;
