import { serviceProduto } from "../service/service_produto.js";

(async () => {
    const pegarURL = new URL(window.location);
    const id = pegarURL.searchParams.get('id');

    const inputURL = document.querySelector('[data-form="imagem"]');
    const inputCategoria = document.querySelector('[data-form="categoria"]');
    const inputNome = document.querySelector('[data-form="nomeProduto"]');
    const inputPreco = document.querySelector('[data-form="preco"]');
    const inputDescricao = document.querySelector('[data-form="descricaoProduto"]');

    try {
        const dados = await serviceProduto.detalhaProduto(id);
        inputURL.value = dados.url;
        inputCategoria.value = dados.categoria;
        inputNome.value = dados.nome;
        inputPreco.value = dados.preco;
        inputDescricao.value = dados.descricao;
    }
    catch(erro) {
        console.log(erro);
    }

    const formAtualizaProduto = document.querySelector('[data-form="atualizaProduto"]');

    formAtualizaProduto.addEventListener('submit', async (evento) => {
        evento.preventDefault();

        try {
            await produtoService.atualizaProduto(id, inputURL.value, inputNome.value, inputPreco.value, inputCategoria.value, inputDescricao.value);
            window.location.href='../screens/produtosAdmin.html';
        }
        catch(erro) {
            console.log(erro);
        }
    });
})();