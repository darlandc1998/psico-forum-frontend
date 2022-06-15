import React from 'react';
import { TagItem } from './styles';

interface TagProps {
  published: boolean;
}

const TagPost: React.FC<TagProps> = ({ published }) =>
  published ? (
    <TagItem color="green">PUBLICADO</TagItem>
  ) : (
    <TagItem color="orange">PENDENTE</TagItem>
  );

export default TagPost;
