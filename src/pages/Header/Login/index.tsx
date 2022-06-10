import React, { useState } from 'react';
import { Member } from '@rsuite/icons';
import { Form, Button, Notification } from '../../../components';
import { IModel, model, modelForm } from './form';
import { useAuth } from '../../../hooks/auth';
import { toaster } from 'rsuite';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const formRef = React.useRef<any>();
  const [formValue, setFormValue] = useState<IModel>(model);

  const handleSubmitForm = async () => {
    if (formRef && formRef.current && !formRef.current.check()) {
      return;
    }

    try {
      const { email, password } = formValue;

      await signIn({
        email,
        password,
      });
    } catch (err) {
      toaster.push(
        <Notification title="Autenticação" type="error" header="error" closable>
          Ocorreu um erro ao fazer login, cheque as credenciais.
        </Notification>,
        {
          placement: 'topEnd',
        },
      );
    }
  };

  return (
    <Form
      layout="inline"
      ref={formRef}
      onChange={setFormValue}
      formValue={formValue}
      model={modelForm}
    >
      <Form.Group controlId="email">
        <Form.Control name="email" placeholder="email" style={{ width: 250 }} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Control
          placeholder="senha"
          name="password"
          type="password"
          autoComplete="off"
          style={{ width: 200 }}
        />
      </Form.Group>
      <Form.Group>
        <Button appearance="primary" type="submit" onClick={handleSubmitForm}>
          <Member /> Entrar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Login;
