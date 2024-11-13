// Seleciona o campo de entrada de CEP
const cepInput = document.querySelector("#cep");

// Seleciona os campos de entrada para exibir o endereço retornado
const logradouroInput = document.querySelector("#logradouro");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");

// Seleciona o campo de seleção de estado (select) para exibir o estado retornado
const estadoSelect = document.querySelector("#estados-brasil");

// Seleciona o botão que irá disparar a busca pelo CEP
const buscarCepBtn = document.querySelector("#buscarCep");

// Define a URL base da API ViaCEP
const URL_BASE = "https://viacep.com.br/ws";

// Função assíncrona que busca o endereço correspondente ao CEP fornecido
async function buscarCep() {
    try {
        // Obtém e remove espaços em branco do valor do campo CEP
        let cep = cepInput.value.trim();

        // Faz a requisição à API ViaCEP usando o CEP digitado
        const resposta = await fetch(`${URL_BASE}/${cep}/json/`);

        // Verifica se a resposta é válida; se não for, lança um erro
        if (!resposta.ok)
            throw new Error("Não foi possível encontrar o CEP");

        // Converte a resposta para o formato JSON
        const dados = await resposta.json();

        // Chama a função para exibir os dados de endereço nos campos apropriados
        mostrarEndereco(dados);
        
    } catch (error) {
        // Exibe o erro no console se a busca falhar
        console.log(error);
    }
}

// Função que preenche os campos de endereço com os dados retornados da API
function mostrarEndereco(endereco) {
    logradouroInput.value = endereco.logradouro;  // Preenche o logradouro
    bairroInput.value = endereco.bairro;          // Preenche o bairro
    cidadeInput.value = endereco.localidade;      // Preenche a cidade
    estadoSelect.value = endereco.uf;             // Seleciona o estado correspondente
}

// Adiciona um evento de clique ao botão para chamar a função de busca de CEP
buscarCepBtn.addEventListener("click", buscarCep);
