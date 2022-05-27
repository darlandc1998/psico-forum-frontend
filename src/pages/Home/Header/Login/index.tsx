import React, { useState } from 'react';
import { Member } from '@rsuite/icons';
import { Form, Button } from '../../../../components';
import { IModel, model, modelForm } from './form';

export default function Login() {
  const formRef = React.useRef();
  const [formValue, setFormValue] = useState<IModel>(model);

  const handleSubmitForm = () => {
    console.log(formValue, 'Form Value');
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
        <Button
          color="blue"
          appearance="primary"
          type="submit"
          onClick={handleSubmitForm}
        >
          <Member /> Entrar
        </Button>
      </Form.Group>
    </Form>
  );
}
