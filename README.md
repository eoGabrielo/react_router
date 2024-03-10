React Router e Servidor JSON

Este projeto é uma aplicação simples em React que demonstra o uso do React Router para navegação, useParams para parâmetros de rota dinâmicos e rotas aninhadas. O código foi desenvolvido como parte de um estudo para compreender e praticar esses conceitos.

## Visão Geral

A aplicação permite aos usuários explorar diferentes páginas, pesquisar itens e visualizar informações detalhadas sobre produtos específicos. Além disso, faz uso de um servidor JSON para fornecer dados simulados. As características principais incluem:

- **Home:** Página inicial.
- **Sobre:** Informações sobre o projeto.
- **Produtos:** Lista todos os produtos disponíveis.
- **Detalhes do Produto:** Exibe detalhes de um produto específico.
- **Informações do Produto:** Informações adicionais sobre um produto.
- **Busca:** Permite aos usuários pesquisar itens específicos.
- **Não Encontrado:** Página para lidar com erros 404.

## Como Começar

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório:
2. Instale as dependências:
3. Inicie o servidor JSON (certifique-se de ter o pacote `json-server` instalado globalmente):

   ```bash
   json-server --watch data/db.json --port 3001
   ```

4. Em outra janela do terminal, inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- `src/`: Contém o código-fonte.
  - `components/`: Componentes React reutilizáveis.
  - `pages/`: Componentes de páginas individuais.
  - `App.js`: Componente principal da aplicação.

## Dependências

O projeto utiliza as seguintes dependências principais:

- `react-router-dom`: Gerencia as rotas na aplicação React.
- `json-server`: Cria um servidor JSON para fornecer dados simulados.

## Reconhecimentos

Este projeto foi desenvolvido para estudos, explorando e praticando React Router, useParams, rotas aninhadas e integração com um servidor JSON. Sinta-se à vontade para analisar o codigo
