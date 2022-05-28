import React from 'react';
import { Card, Body, Title, Cover } from './styles';

export default function CardHome() {
  return (
    <Card shaded bordered bodyFill>
      <Cover src="https://img.icons8.com/ios/452/psychology.png" />
      <Body>
        <Title>
          A suite of React components, sensible UI design, and a friendly
          development experience.
        </Title>
      </Body>
    </Card>
  );
}
