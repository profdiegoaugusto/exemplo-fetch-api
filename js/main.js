// Função que busca produtos de uma API pública
function buscarProdutos() {
    const URL_BASE = 'https://fakestoreapi.com/products';

    // Realiza uma requisição à API Fake Store para obter a lista de produtos
    fetch(URL_BASE)
        .then(resposta => resposta.json())      // Converte a resposta em JSON
        .then(dados => console.log(dados))      // Exibe os dados dos produtos no console
        .catch(erro => console.error('Error:', erro)); // Captura e exibe erros no console, se houver
}

// Função que busca cargos a partir de um arquivo JSON local
function buscarCargos() {
    const URL_BASE = 'data/cargos.json';

    // Realiza uma requisição ao arquivo JSON local para obter a lista de cargos
    fetch(URL_BASE)
        .then(resposta => resposta.json())      // Converte a resposta em JSON
        .then(dados => console.log(dados))      // Exibe os dados dos cargos no console
        .catch(erro => console.error('Error:', erro)); // Captura e exibe erros no console, se houver
}

// Função assíncrona que busca Pokémons a partir de um arquivo JSON local
async function buscarPokemons() {
    const URL_BASE = 'data/pokemons.json'; // Modifique o caminho para forçar uma mensagem de erro, se necessário

    try {
        // Realiza uma requisição para obter a lista de Pokémons
        const resposta = await fetch(URL_BASE);

        // Verifica se a resposta foi bem-sucedida; caso contrário, lança um erro
        if (!resposta.ok)
            throw new Error("Não foi possível carregar os dados!");

        // Converte a resposta em JSON
        const pokemons = await resposta.json();

        // Obtém a quantidade de Pokémons carregados
        let n = pokemons.length;
        console.log(`${n} Pokémons carregados.`); // Exibe a quantidade no console
        console.log(pokemons);                    // Exibe os dados dos Pokémons no console

    } catch (erro) {
        // Exibe qualquer erro capturado no console
        console.error(erro);
    }
}

// Adiciona um evento 'load' à janela, executando as funções de busca quando a página carrega
window.addEventListener("load", () => {
    buscarProdutos();   // Chama a função para buscar produtos da API pública
    buscarCargos();     // Chama a função para buscar cargos do arquivo JSON local
    buscarPokemons();   // Chama a função para buscar Pokémons do arquivo JSON local
});
