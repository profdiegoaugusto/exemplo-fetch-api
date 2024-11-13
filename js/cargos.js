// Seleciona o elemento <select> no HTML onde as opções serão adicionadas
const select = document.querySelector("select");

// Define a URL base do arquivo JSON que contém os cargos
const URL_BASE = "../data/cargos.json";

// Função assíncrona que carrega os dados do arquivo JSON
async function carregarDados() {
    try {
        // Faz uma requisição HTTP para obter os dados JSON
        const resposta = await fetch(URL_BASE);

        // Verifica se a resposta foi bem-sucedida; caso contrário, lança um erro
        if (!resposta.ok)
            throw new Error("Não foi possível carregar os dados!");

        // Converte a resposta para um objeto JavaScript
        const cargos = await resposta.json();

        // (Opcional) Ordena o array de objetos 'cargos' alfabeticamente pelo título do cargo
        // cargos.sort((a, b) => { return a.titulo.localeCompare(b.titulo); });

        // Chama a função para preencher o elemento <select> com os dados carregados
        preencherSelect(cargos);

    } catch (error) {
        // Exibe uma mensagem de erro em um alerta e no console em caso de falha na requisição
        alert(error);
        console.error(error);
    }
}

// Função que cria e adiciona elementos <option> ao <select> com base nos dados recebidos
function preencherSelect(dados) {
    // Itera sobre cada item do array de dados
    for (let i = 0; i < dados.length; i++) {
        // Cria um novo elemento <option> para cada cargo
        const option = document.createElement("option");

        // Define o valor do atributo 'value' do <option> com o id do cargo
        option.setAttribute("value", dados[i].id);

        // Define o texto do <option> com o título do cargo
        option.innerText = dados[i].titulo;

        // Adiciona o <option> ao elemento <select>
        select.appendChild(option);
    }
}

// Adiciona um evento 'load' à janela, que executa a função carregarDados ao carregar a página
window.addEventListener("load", () => {
    carregarDados();
});
