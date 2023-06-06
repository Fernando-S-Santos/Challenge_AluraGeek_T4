import { mostraMensagemErro } from "./mostra_Mensagem_Erro.js";
import { irPara } from "./irPara.js";

const inputs = document.querySelectorAll('[data-form]');
const botoes = document.querySelectorAll('[data-botao]');

botoes.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        irPara(evento.target);
    });
});


inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        mostraMensagemErro(evento.target);
    });
});