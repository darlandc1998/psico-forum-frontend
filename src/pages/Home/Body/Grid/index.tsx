import React, { useState, useEffect } from 'react';
import api from '../../../../services';
import { Loader, FlexboxGrid } from '../../../../components';
import Card from './Card';

interface IPostResponse {
  id: number;
  title: string;
  text: string;
  cover?: string;
  createdAt: Date;
}

const GridHome: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPostResponse[]>([]);

  useEffect(() => {
    handleSearchPosts();
  }, []);

  const handleSearchPosts = async () => {
    setLoading(true);
    try {
      const postsFromServer = await api.get('/posts');
      setPosts(postsFromServer.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlexboxGrid
      justify="space-around"
      style={{ padding: 30, justifyContent: 'center' }}
    >
      {loading ? (
        <Loader />
      ) : (
        posts.map(item => (
          <FlexboxGrid.Item
            key={item.id}
            colspan={6}
            style={{ textAlign: 'center', margin: 10 }}
          >
            <Card post={item} />
          </FlexboxGrid.Item>
        ))
      )}
    </FlexboxGrid>
  );
};

export default GridHome;
