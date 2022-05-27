import { Schema } from '../../../../components';

interface IModel {
  email: string;
  password: string;
}

const model: IModel = {
  email: '',
  password: '',
};

const modelForm = Schema.Model({
  email: Schema.Types.StringType()
    .isRequired('E-mail é obrigatório!')
    .isEmail('Por favor informe um e-mail válido!'),
  password: Schema.Types.StringType().isRequired('Senha é obrigatória!'),
});

export { IModel, model, modelForm };
