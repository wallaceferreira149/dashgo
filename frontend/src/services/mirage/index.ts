/* eslint-disable import/no-extraneous-dependencies */
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from 'miragejs';
import faker from 'faker';

interface User {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    // O serializer permite que criemos um Model estruturado. Caso um model tenha relacionamento com outro podemos encadear a informação {id: 1, name: 'xxx', ...., address: { street: 'xxx', city: 'xxx', ...}} O ActiveModel é quem permite realizar essa estruturação.
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    // factories são utilizadas para gerar dados em massa, podendo utilizar um contador, por exemplo, para gerar 200 usuários com o texto "usuario1, 2, 3...200"
    factories: {
      user: Factory.extend({
        // todo campo de factory recebe um índice que é um número. Podemos ter acesso a esse número para criar itens únicos com números incrementais.
        name(i) {
          return `User${i + 1}`; // O primeiro índice é 0
        },
        email() {
          return faker.internet.email().toLocaleLowerCase(); // Utilizamos a biblioteca faker para criar um email único para cada usuário
        },
        createdAt() {
          return faker.date.recent(10);
          // utilizando o faker para criar uma data recente nos últimos 10 dias.
        },
      }),
    },

    // cria dados assim que o servidor for inicializado para não vir sem nenhum dado fake
    seeds(sv) {
      sv.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 100; // Demora para simular uma chamada na internet, ou DB

      // Por padrão o mirage não trás uma paginação automática, para isso temos que fazer nossa lógica de paginação. O método get recebe uma função como segundo parâmetro.
      // eslint-disable-next-line func-names
      this.get('/users', function (schema, request) {
        // eslint-disable-next-line camelcase
        const { page = 1, per_page = 10 } = request.queryParams; // Pega da requisição a página e a quantidade, os parâmetros são os 10 primeiros da primeira página

        const total = schema.all('user').length; // Obtendo o total de registros no schema.

        const pageStart = (Number(page) - 1) * Number(per_page); // Por padrão os parâmetros de uma query vem em string. Os usuários vão começar no registro número da pág menos 1 q é o registro no momento vezes a quantidade de exibição por registros.

        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd,
        );

        return new Response(200, { 'x-total-count': String(total) }, { users });
      });

      this.get('/users/:id');
      this.post('/users');

      this.namespace = ''; // Resetar as rotas para não ser igual ao API do Next
      this.passthrough(); // Todas as chamadas a rota 'api' vão passar pelo mirageJs e caso não tenha correspondência ele vai passar para a 'api' do next
    },
  });

  return server;
}
