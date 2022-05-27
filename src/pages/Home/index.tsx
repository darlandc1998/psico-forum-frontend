import React from 'react';
import { Container } from '../../components';
import { ContentHome, HeaderHome, FooterHome } from './styles';
import { Global } from '@rsuite/icons';
import HeaderInfo from './Header';
import BodyInfo from './Body';

export default function Home() {
  return (
    <div className="show-container">
      <Container>
        <HeaderHome>
          <HeaderInfo />
        </HeaderHome>
        <ContentHome>
          <BodyInfo />
        </ContentHome>
        <FooterHome>
          Desenvolvido por Darlan Domingos Candiotto
          <Global />
        </FooterHome>
      </Container>
    </div>
  );
}
