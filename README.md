# Exemplo de Uso da Fetch API para Buscar Dados

Este repositório contém exemplos de código usando a Fetch API do JavaScript para buscar dados de diferentes fontes. O foco está na utilização do método `GET`, que permite recuperar informações de uma API ou arquivo JSON. Este repositório apresenta o uso das duas principais formas de utilizar `fetch` para requisições `GET`: com `then/catch` e com `async/await`.

## Índice

- [Sobre a Fetch API](#sobre-a-fetch-api)
- [Método GET com Fetch](#método-get-com-fetch)
- [Conteúdo do Repositório](#conteúdo-do-repositório)
- [Executando os Exemplos](#executando-os-exemplos)

## Sobre a Fetch API

A Fetch API é uma funcionalidade moderna e nativa do JavaScript para fazer requisições HTTP de forma assíncrona. Usada frequentemente para consumir APIs e buscar ou enviar dados para servidores, a Fetch API permite substituir a funcionalidade do antigo `XMLHttpRequest` com uma interface mais simples e poderosa.

Neste repositório, usamos apenas o método `GET`, focando em como buscar dados e exibí-los no console ou manipulá-los em uma aplicação. Com `fetch`, é possível buscar dados de APIs públicas ou de arquivos JSON locais.

## Método GET com Fetch

Existem duas formas comuns de fazer uma requisição `GET` usando `fetch`:

1. **Com Promises (`then/catch`)**  
   Este formato é útil para quem prefere o uso de Promises e ainda não quer adotar a sintaxe `async/await`. As etapas da requisição são encadeadas em uma sequência de `.then()` que manipula a resposta da API e converte os dados para JSON.

   ```javascript
   fetch("https://exemplo.com/api/dados")
     .then((resposta) => resposta.json()) // Converte a resposta em JSON
     .then((dados) => console.log(dados)) // Exibe os dados no console
     .catch((erro) => console.error("Erro:", erro)); // Exibe erros, caso ocorram
   ```

2. **Com `async/await`**  
   O `async/await` permite escrever código assíncrono de forma mais clara e próxima ao código síncrono. A palavra-chave `await` pausa a execução até que a Promise seja resolvida, e em caso de erro, é possível capturá-lo com um bloco `try/catch`.

   ```javascript
   async function buscarDados() {
     try {
       const resposta = await fetch("https://exemplo.com/api/dados");
       const dados = await resposta.json(); // Converte a resposta em JSON
       console.log(dados); // Exibe os dados no console
     } catch (erro) {
       console.error("Erro:", erro); // Exibe erros, caso ocorram
     }
   }
   ```

Ambas as sintaxes têm o mesmo resultado final, mas `async/await` geralmente torna o código mais fácil de ler, especialmente quando há várias operações assíncronas encadeadas.

## Conteúdo do Repositório

O repositório inclui três exemplos de como buscar dados:

- **buscarProdutos**: Realiza uma requisição para uma API pública de produtos usando `then/catch`.
- **buscarCargos**: Carrega um arquivo JSON local com uma lista de cargos, também usando `then/catch`.
- **buscarPokemons**: Carrega um arquivo JSON local com uma lista de Pokémons, usando `async/await` e exibindo a quantidade de dados carregados.

## Executando os Exemplos

Para executar os exemplos localmente:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/exemplo-fetch-api.git
   cd exemplo-fetch-api
   ```

2. Coloque os arquivos JSON locais (por exemplo, `cargos.json` e `pokemons.json`) na pasta `data` (ou ajuste o caminho no código conforme necessário).

3. Abra o arquivo HTML principal em um navegador. Certifique-se de que o navegador esteja habilitado para acessar arquivos locais, ou use uma extensão de servidor local.
