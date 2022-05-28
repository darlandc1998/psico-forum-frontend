import React, { useState, useEffect } from 'react';
import { FlexboxGrid } from '../../../../components';
import Card from './Card';

interface IPostResponse {
  id: number;
  title: string;
  text: string;
  cover?: string;
  createdAt: Date;
}

export default function GridHome() {
  const [posts, setPosts] = useState<IPostResponse[]>([]);

  useEffect(() => {
    setPosts([
      { id: 1, title: 'Title 1', text: 'Text 1', createdAt: new Date() },
      { id: 2, title: 'Title 2', text: 'Text 2', createdAt: new Date() },
      { id: 3, title: 'Title 3', text: 'Text 3', createdAt: new Date() },
      { id: 4, title: 'Title 4', text: 'Text 4', createdAt: new Date() },
      { id: 5, title: 'Title 5', text: 'Text 5', createdAt: new Date() },
      { id: 6, title: 'Title 6', text: 'Text 6', createdAt: new Date() },
    ]);
  }, []);

  return (
    <FlexboxGrid
      justify="space-around"
      style={{ padding: 30, justifyContent: 'center' }}
    >
      {posts.map(item => (
        <FlexboxGrid.Item
          key={item.id}
          colspan={6}
          style={{ textAlign: 'center', margin: 10 }}
        >
          <Card />
        </FlexboxGrid.Item>
      ))}
    </FlexboxGrid>
  );
}
