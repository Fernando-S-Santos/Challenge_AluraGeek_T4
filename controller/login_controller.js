const formLogin = document.querySelector('[data-form="formularioLogin"]');

const usuarios = [
    {email: 'alurageek@email.com', senha: '******'},
];

formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const email = document.querySelector('[data-form="email"]').value;
    const senha = document.querySelector('[data-form="senha"]').value;

    usuarios.forEach(usuario => {
        if(email === usuario.email && senha === usuario.senha) {
            window.location.href = '../screens/produtosAdmin.html';
        } else {
            alert('e-Mail ou Senha inválido!')
        }
    })
});