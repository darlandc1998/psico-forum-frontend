import React, { useMemo } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
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

const CardHome: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();

  const createdAtFormatted = useMemo(() => {
    return moment(post.createdAt).format('DD/MM/YYYY HH:mm:ss');
  }, [post.createdAt]);

  return (
    <Card
      shaded
      bordered
      bodyFill
      onClick={() => navigate(`/post/${post.id}`, { replace: true })}
    >
      <Cover
        src={post.cover || 'https://img.icons8.com/ios/452/psychology.png'}
      />
      <Body>
        <Title>{post.title}</Title>
        <Date>{createdAtFormatted}</Date>
      </Body>
    </Card>
  );
};

export default CardHome;
