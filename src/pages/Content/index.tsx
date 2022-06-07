import React, { ReactNode } from 'react';
import { ContentStyled } from './styles';

interface Props {
  children?: ReactNode;
}

const Content: React.FC<Props> = ({ children }) => (
  <ContentStyled>{children}</ContentStyled>
);

export default Content;
