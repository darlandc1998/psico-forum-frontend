import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import {
  Button,
  Container,
  Form,
  Toggle,
  InpuTextArea,
} from '../../components';
import { IModel, model, modelForm } from './form';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const RegisterPost: React.FC = () => {
  const { user } = useAuth();
  const formRef = React.useRef<any>();
  const [formValue, setFormValue] = useState<IModel>(model);
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = () => {
    if (formRef && formRef.current && !formRef.current.check()) {
      return;
    }
    setLoading(true);
    try {
      const { title, text, published } = formValue;
      console.log('Values = ', {
        title,
        text,
        published,
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
        author_id: user.id,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form
          ref={formRef}
          formValue={formValue}
          onChange={setFormValue}
          model={modelForm}
        >
          <Form.Group controlId="title">
            <Form.ControlLabel>Título</Form.ControlLabel>
            <Form.Control name="title" readOnly={loading} />
          </Form.Group>
          <Form.Group controlId="text">
            <Form.ControlLabel>Conteúdo</Form.ControlLabel>
            <Form.Control
              name="text"
              readOnly={loading}
              accepter={InpuTextArea}
            />
          </Form.Group>
          <Form.Group controlId="published">
            <Form.ControlLabel>Publicar</Form.ControlLabel>
            <Form.Control name="published" readOnly={loading} accepter={Toggle}>
              <Toggle defaultChecked />
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button
              appearance="primary"
              type="submit"
              onClick={handleSubmitForm}
              loading={loading}
            >
              Salvar
            </Button>
          </Form.Group>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default RegisterPost;
