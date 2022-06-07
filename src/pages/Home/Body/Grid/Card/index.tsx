import React from 'react';
import { Card, Body, Title, Date, Cover } from './styles';

const CardHome: React.FC = () => (
  <Card shaded bordered bodyFill>
    <Cover src="https://img.icons8.com/ios/452/psychology.png" />
    <Body>
      <Title>
        A suite of React components, sensible UI design, and a friendly
        development experience.
      </Title>
      <Date>27/06/1998</Date>
    </Body>
  </Card>
);

export default CardHome;
