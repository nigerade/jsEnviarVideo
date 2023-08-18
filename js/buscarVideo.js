// Importa a função "conectaApi" do arquivo "./conectaApi.js"
import { conectaApi } from "./conectaApi.js";

// Importa a função "constroiCard" do arquivo "./mostrarVideos.js"
import constroiCard from "./mostrarVideos.js";

// Define uma função assíncrona chamada "buscarVideo"
async function buscarVideo(evento) {
    // Previne o comportamento padrão de enviar o formulário
    evento.preventDefault();

    // Obtém os dados de pesquisa do campo de entrada
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    // Chama a função da API "buscaVideo" com os dados de pesquisa
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    // Seleciona o elemento HTML que corresponde à lista de vídeos
    const lista = document.querySelector("[data-lista]");

    // Remove todos os elementos filhos da lista
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // Adiciona os novos cards de vídeo à lista com base nos resultados da busca
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    // Se a busca não retornar resultados, exibe uma mensagem de aviso na lista
    if (busca.length === 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
    }
}

// Seleciona o botão de pesquisa
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

// Adiciona um ouvinte de evento de clique ao botão de pesquisa, que chama a função "buscarVideo" quando o botão é clicado
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
