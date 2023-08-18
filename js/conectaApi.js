// Define uma função assíncrona chamada "listaVideos"
async function listaVideos() {
    // Realiza uma requisição assíncrona para obter a lista de vídeos da API
    const conexao = await fetch("http://localhost:3000/videos");
    // Converte a resposta da requisição para formato JSON
    const conexaoConvertida = await conexao.json();

    // Retorna os dados convertidos da API
    return conexaoConvertida;
}

// Define uma função assíncrona chamada "criaVideo" que envia um novo vídeo para a API
async function criaVideo(titulo, descricao, url, imagem) {
    // Realiza uma requisição assíncrona do tipo POST para criar um novo vídeo na API
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        // Converte os dados do vídeo em um formato JSON e os envia no corpo da requisição
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    // Verifica se a resposta da requisição não é bem-sucedida e lança um erro em caso negativo
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }

    // Converte a resposta da requisição para formato JSON
    const conexaoConvertida = conexao.json();

    // Retorna os dados convertidos da API
    return conexaoConvertida;
}

// Define uma função assíncrona chamada "buscaVideo" que busca vídeos na API com base em um termo de busca
async function buscaVideo(termoDeBusca) {
    // Realiza uma requisição assíncrona para buscar vídeos da API usando um termo de busca como parâmetro
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    // Converte a resposta da requisição para formato JSON
    const conexaoConvertida = await conexao.json();

    // Retorna os dados convertidos da API
    return conexaoConvertida;
}

// Exporta um objeto que contém as três funções definidas acima, formando a "conectaApi"
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
