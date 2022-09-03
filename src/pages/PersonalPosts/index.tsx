import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import api from '../../services';
import { useAuth } from '../../hooks/auth';
import { Container, Loader } from '../../components';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import Tag from './Tag';
import { Plus } from '@rsuite/icons';
import { ContainerPosts, TablePosts, ButtonNewPost } from './styles';

const PersonalPosts: React.FC = () => {
  const navigate = useNavigate();
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
            <>
              <TablePosts
                data={posts}
                onRowClick={(data: any) => console.log(data)}
              >
                <TablePosts.Column flexGrow={1} align="center" fixed>
                  <TablePosts.HeaderCell>ID</TablePosts.HeaderCell>
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
                  <TablePosts.HeaderCell>Criado em</TablePosts.HeaderCell>
                  <TablePosts.Cell>
                    {rowData =>
                      moment(rowData.createdAt).format('DD/MM/YYYY HH:mm:ss')
                    }
                  </TablePosts.Cell>
                </TablePosts.Column>
                <TablePosts.Column flexGrow={1} align="center" fixed>
                  <TablePosts.HeaderCell>Publicação</TablePosts.HeaderCell>
                  <TablePosts.Cell>
                    {rowData => <Tag published={rowData.published} />}
                  </TablePosts.Cell>
                </TablePosts.Column>
              </TablePosts>
              <ButtonNewPost
                icon={<Plus />}
                circle
                size="lg"
                color="green"
                appearance="primary"
                onClick={() => navigate('/new-post')}
              />
            </>
          )}
        </ContainerPosts>
      </Content>
      <Footer />
    </Container>
  );
};

export default PersonalPosts;
