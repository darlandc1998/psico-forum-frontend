import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services';
import { Container } from '../../components';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const PublicPost: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();

  useEffect(() => {
    handleGetPublicPost();
  }, []);

  const handleGetPublicPost = async () => {
    setLoading(true);
    try {
      const publicPost = await api.get(`/posts/${id}`);
      setPost(publicPost.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        Detalhe do post: {loading} - {JSON.stringify(post)}
      </Content>
      <Footer />
    </Container>
  );
};

export default PublicPost;
