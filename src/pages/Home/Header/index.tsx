import React from 'react';
import { Form } from '../../../components';
import { HeaderInfo, ContentHeaderInfo } from './styles';

export default function Header() {
  return (
    <ContentHeaderInfo>
      <HeaderInfo>PsicoFórum</HeaderInfo>
      <Form layout="inline">
        <Form.Group controlId="email">
          <Form.Control
            name="email"
            placeholder="email"
            style={{ width: 150 }}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            placeholder="senha"
            name="password"
            type="password"
            autoComplete="off"
            style={{ width: 150 }}
          />
        </Form.Group>
      </Form>
    </ContentHeaderInfo>
  );
}
