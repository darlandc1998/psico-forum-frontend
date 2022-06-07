import React from 'react';
import { Container } from '../../components';

import Footer from '../Footer';
import Header from '../Header';
import Content from '../Content';
import BodyInfo from './Body';

const Home: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <BodyInfo />
    </Content>
    <Footer />
  </Container>
);

export default Home;
