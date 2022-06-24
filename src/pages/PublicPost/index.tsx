import React from 'react';
import { Container } from '../../components';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const PublicPost: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>Detalhe do post</Content>
      <Footer />
    </Container>
  );
};

export default PublicPost;
