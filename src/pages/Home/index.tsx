import React from 'react';
import { Container, Content } from '../../components';
import { ContentHome, HeaderHome, FooterHome } from './styles';
import { Pc } from '@rsuite/icons';
import HeaderInfo from './Header';

export default function Home() {
  return (
    <div className="show-container">
      <Container>
        <HeaderHome>
          <HeaderInfo />
        </HeaderHome>
        <ContentHome>Content</ContentHome>
        <FooterHome>
          Desenvolvido por Darlan Domingos Candiotto
          <Pc />
        </FooterHome>
      </Container>
    </div>
  );
}
