import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import api from '../../services';
import { Container, Loader } from '../../components';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import {
  ContainerPost,
  ContentPost,
  TitlePost,
  TextPost,
  ContentDetailsPost,
  CreationPost,
  CreationTitlePost,
  CreationValuePost,
  AuthorPost,
  AuthorTitlePost,
  AuthorValuePost,
} from './styles';

interface UserRequest {
  id: number;
  name: string;
}

interface PostRequest {
  id: number;
  title: string;
  text: string;
  cover?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  author: UserRequest;
}

const PublicPost: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<PostRequest>();

  useEffect(() => {
    handleGetPublicPost();
  }, []);

  const handleGetPublicPost = async () => {
    setLoading(true);
    try {
      const publicPost = await api.get<PostRequest>(`/posts/${id}`);
      setPost(publicPost.data);
      console.log(publicPost.data);
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
        <ContainerPost>
          {loading ? (
            <Loader />
          ) : (
            <ContentPost>
              <TitlePost>{post?.title}</TitlePost>
              <ContentDetailsPost>
                <AuthorPost>
                  <AuthorTitlePost>Autor:</AuthorTitlePost>
                  <AuthorValuePost>{post?.author?.name}</AuthorValuePost>
                </AuthorPost>
                <CreationPost>
                  <CreationTitlePost>Criado em:</CreationTitlePost>
                  <CreationValuePost>
                    {moment(post?.createdAt).format('DD/MM/YYYY HH:mm:ss')}
                  </CreationValuePost>
                </CreationPost>
              </ContentDetailsPost>
              <TextPost>{post?.text}</TextPost>
            </ContentPost>
          )}
        </ContainerPost>
      </Content>
      <Footer />
    </Container>
  );
};

export default PublicPost;
