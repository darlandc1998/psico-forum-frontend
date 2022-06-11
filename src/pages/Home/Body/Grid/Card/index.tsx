import React from 'react';
import { Card, Body, Title, Date, Cover } from './styles';

interface Post {
  id: number;
  title: string;
  cover?: string;
  createdAt: Date;
}

interface Props {
  post: Post;
}

const CardHome: React.FC<Props> = ({ post }) => (
  <Card shaded bordered bodyFill>
    <Cover
      src={post.cover || 'https://img.icons8.com/ios/452/psychology.png'}
    />
    <Body>
      <Title>{post.title}</Title>
      <Date>{post.createdAt}</Date>
    </Body>
  </Card>
);

export default CardHome;
