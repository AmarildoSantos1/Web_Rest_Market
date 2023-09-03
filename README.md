# Web_Rest_Market
Este projeto é um sistema de supermercado construído em Node.js e MongoDB. Ele oferece recursos para cadastrar produtos, usuários, promoções e permite que os funcionários atualizem um conjunto de itens de uma só vez. Além disso, os usuários podem fazer login e receber promoções com base em suas preferências de compra.



#Configuração:
Clone o repositório para a máquina local.

Instale as dependências do projeto usando npm install.

Configure o banco de dados MongoDB e defina as variáveis de ambiente em
um arquivo .env.

Inicie o servidor com npm start.

Funcionalidades Principais:

Cadastrar, atualizar, recuperar e remover produtos.
Cadastrar, atualizar, recuperar e remover funcionários (usuários do
supermercado).

Autenticação de usuários e funcionários.

Cadastrar, atualizar, recuperar e remover promoções.

Atualizar um conjunto de itens de uma só vez (por exemplo, aplicar um
desconto a todos os itens do tipo chocolate).

Receber promoções personalizadas com base nas preferências de compra.

Estrutura do Projeto:

O projeto segue as melhores práticas de organização de código, com a
separação de controllers, models e rotas para produtos, usuários e
funcionários.

Utiliza o Mongoose para modelar objetos MongoDB.

As rotas API são configuradas para cada funcionalidade.

Uso:

As funcionalidades do sistema podem ser acessadas através de solicitações
HTTP usando ferramentas como Postman.

Os endpoints estão definidos nas rotas API e correspondem às operações
CRUD.
