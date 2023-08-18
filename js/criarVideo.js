// Importa a função "conectaApi" do arquivo "./conectaApi.js"
import { conectaApi } from "./conectaApi.js";

// Seleciona o elemento HTML que corresponde a um formulário usando o atributo "data-formulario"
const formulario = document.querySelector("[data-formulario]");

// Define uma função assíncrona chamada "criarVideo" que recebe um evento como parâmetro
async function criarVideo(evento) {
    // Previne o comportamento padrão de enviar o formulário
    evento.preventDefault();

    // Seleciona o valor do campo de entrada que corresponde a uma imagem
    const imagem = document.querySelector("[data-imagem]").value;

    // Seleciona o valor do campo de entrada que corresponde a uma URL
    const url = document.querySelector("[data-url]").value;

    // Seleciona o valor do campo de entrada que corresponde a um título
    const titulo = document.querySelector("[data-titulo]").value;

    // Gera um valor de descrição aleatório usando um número aleatório multiplicado por 10 e convertido para string
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        // Chama a função "criaVideo" da API definida no módulo "conectaApi"
        // passando os valores do título, descrição, URL e imagem como argumentos
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        // Redireciona a janela para a página "../pages/envio-concluido.html" após a criação do vídeo
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        // Se ocorrer um erro durante a chamada da API, exibe um alerta com a mensagem de erro
        alert(e);
    }
}

// Adiciona um ouvinte de evento de envio (submit) ao formulário, que chama a função "criarVideo" quando o formulário é enviado
formulario.addEventListener("submit", evento => criarVideo(evento));
