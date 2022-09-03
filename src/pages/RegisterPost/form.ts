import Schema from '../../components/Schema';

interface IModel {
  title: string;
  text: string;
  cover?: string | null;
  published: boolean;
}

const model: IModel = {
  title: '',
  text: '',
  cover: null,
  published: false,
};

const modelForm = Schema.Model({
  title: Schema.Types.StringType().isRequired('Título obrigatório!'),
  text: Schema.Types.StringType().isRequired('Conteúdo obrigatório!'),
  cover: Schema.Types.StringType(),
  published: Schema.Types.BooleanType().isRequired(),
});

export { IModel, model, modelForm };
