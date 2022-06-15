import React, { useState, useEffect } from 'react';
import api from '../../services';
import { useAuth } from '../../hooks/auth';
import { Container, Loader } from '../../components';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import { ContainerPosts, TablePosts } from './styles';

const PersonalPosts: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handleGetPersonalPosts();
  }, []);

  const handleGetPersonalPosts = async () => {
    setLoading(true);
    try {
      const personalPosts = await api.get(`/posts?author=${user.id}`);
      setPosts(personalPosts.data);
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
        <ContainerPosts>
          {loading ? (
            <Loader />
          ) : (
            <TablePosts data={posts}>
              <TablePosts.Column flexGrow={1} align="center" fixed>
                <TablePosts.HeaderCell>Id</TablePosts.HeaderCell>
                <TablePosts.Cell dataKey="id" />
              </TablePosts.Column>
              <TablePosts.Column flexGrow={1} align="center" fixed>
                <TablePosts.HeaderCell>Título</TablePosts.HeaderCell>
                <TablePosts.Cell dataKey="title" />
              </TablePosts.Column>
              <TablePosts.Column flexGrow={1} align="center" fixed>
                <TablePosts.HeaderCell>Conteúdo</TablePosts.HeaderCell>
                <TablePosts.Cell dataKey="text" />
              </TablePosts.Column>
              <TablePosts.Column flexGrow={1} align="center" fixed>
                <TablePosts.HeaderCell>Publicação</TablePosts.HeaderCell>
                <TablePosts.Cell>
                  {rowData => (rowData.published ? 'Publicado' : 'Pendente')}
                </TablePosts.Cell>
              </TablePosts.Column>
            </TablePosts>
          )}
        </ContainerPosts>
      </Content>
      <Footer />
    </Container>
  );
};

export default PersonalPosts;
