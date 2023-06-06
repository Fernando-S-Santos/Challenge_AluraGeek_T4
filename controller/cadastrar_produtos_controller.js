import { serviceProduto } from "../service/service_produto.js";

const formCadastroProduto = document.querySelector('[data-form="cadastroProduto"]');

formCadastroProduto.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const url = document.querySelector('[data-form="imagem"]').value;
    const categoria = document.querySelector('[data-form="categoria"]').value;
    const nome = document.querySelector('[data-form="nomeProduto"]').value;
    const preco = document.querySelector('[data-form="preco"]').value;
    const descricao = document.querySelector('[data-form="descricaoProduto"]').value;

    try {
        await serviceProduto.cadastraProduto(url, nome, preco, categoria, descricao);
        window.location.href = "../screens/produtosAdmin.html";
    }
    catch(erro) {
        console.log(erro);
    }
});