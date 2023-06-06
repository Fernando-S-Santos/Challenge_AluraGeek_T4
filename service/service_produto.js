const listaProduto = () => {
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível listar os produtos.');
    });
};

const cadastraProduto = (url, nome, preco, categoria, descricao) => {
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
            nome: nome,
            preco: preco,
            categoria: categoria,
            descricao: descricao
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error('Não foi possível cadastrar o produto.');
    });
};

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possível remover o produto.');
        }
    });
};

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível detalhar o produto.');
    });
};

const atualizaProduto = (id, url, nome, preco, categoria, descricao) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
            nome: nome,
            preco: preco,
            categoria: categoria,
            descricao: descricao
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível atualizar o produto.');
    });
};

export const produtoService = {
    listaProduto,
    cadastraProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
};