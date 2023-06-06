export const irPara = (button) => {
    const tipoButton = button.dataset.botao;
    
    if(caminho[tipoButton]) {
        caminho[tipoButton]();
    }
};

const caminho = {
    //login: () => window.location.href = '../../screens/login.html',
    adicionarProduto: () => window.location.href = '../../screens/cadastro_de_produtos.html',
    banner: () => window.location.href = '#consoles'
};