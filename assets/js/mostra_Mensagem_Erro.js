export const mostraMensagemErro = (input) => {
    const tipoDeInput = input.dataset.form;

    if(input.validity.valid) {
        input.parentElement.classList.remove('form__input-container--invalido');
        input.parentElement.querySelector('.form__invalido').innerHTML = '';
    } else {
        input.parentElement.classList.add('form__input-container--invalido');
        input.parentElement.querySelector('.form__invalido').innerHTML = selecionaMensagemErro(tipoDeInput, input);
    }
};

const tiposDeErro = [
    'valueMissing',
    'typeMismatch'
];

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo e-Mail não pode estar vazio.',
        typeMismatch: 'O e-Mail digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo senha não pode estar vazio.'
    },
    imagem: {
        valueMissing: 'O campo URL da imagem não pode estar vazio.'
    },
    categoria: {
        valueMissing: 'O campo categoria não pode estar vazio.'
    },
    nomeProduto: {
        valueMissing: 'O campo nome do produto não pode estar vazio.'
    },
    preco: {
        valueMissing: 'O campo preço não pode estar vazio.'
    },
    descricaoProduto: {
        valueMissing: 'O campo descrição do produto não pode estar vazio.'
    }
};

const selecionaMensagemErro = (tipoDeInput, input) => {
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    });
    return mensagem;
};