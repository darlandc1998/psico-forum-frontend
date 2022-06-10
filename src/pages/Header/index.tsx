import React from 'react';
import { ContainerHeader, ContentHeader, TitleHeader } from './styles';
import { useAuth } from '../../hooks/auth';
import Login from './Login';
import Logged from './Logged';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <ContainerHeader>
      <ContentHeader>
        <TitleHeader>PsicoFórum</TitleHeader>
        {!user ? <Login /> : <Logged />}
      </ContentHeader>
    </ContainerHeader>
  );
};

export default Header;
