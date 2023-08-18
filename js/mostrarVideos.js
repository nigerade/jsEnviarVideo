// Importa a função "conectaApi" do arquivo "./conectaApi.js"
import { conectaApi } from "./conectaApi.js";

// Seleciona o elemento HTML que corresponde a uma lista usando o atributo "data-lista"
const lista = document.querySelector("[data-lista]");

// Exporta uma função chamada "constroiCard", que constrói um elemento de card de vídeo
export default function constroiCard(titulo, descricao, url, imagem) {
    // Cria um novo elemento <li> para representar um vídeo na lista
    const video = document.createElement("li");
    // Define a classe do elemento <li> para "videos__item"
    video.className = "videos__item";
    // Preenche o conteúdo do elemento <li> com HTML que inclui um iframe e informações do vídeo
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>`;

    // Retorna o elemento <li> de vídeo construído
    return video;
}

// Define uma função assíncrona chamada "listaVideos"
async function listaVideos() {
    try {
        // Chama a função "listaVideos" da API definida no módulo "conectaApi"
        const listaApi = await conectaApi.listaVideos();
        // Para cada elemento na lista retornada pela API, cria um card de vídeo usando a função "constroiCard" e o adiciona à lista no DOM
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch {
        // Se ocorrer um erro ao chamar a API, exibe uma mensagem de erro na lista
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`;
    }
}

// Chama a função "listaVideos" para carregar os vídeos na lista assim que o script é executado
listaVideos();