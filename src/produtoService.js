const { lerProdutos, salvarProdutos } = require('./storage');

function gerarId(produtos) {
  return produtos.length > 0
    ? Math.max(...produtos.map(p => p.id)) + 1
    : 1;
}

function adicionarProduto(nome, categoria, quantidade, preco) {
  const produtos = lerProdutos();

  const novoProduto = {
    id: gerarId(produtos),
    nome,
    categoria,
    quantidade,
    preco
  };

  produtos.push(novoProduto);
  salvarProdutos(produtos);
}

function listarProdutos() {
  return lerProdutos();
}

function buscarProdutoPorId(id) {
  const produtos = lerProdutos();
  return produtos.find(p => p.id === id);
}

function buscarProdutoPorNome(nome) {
  const produtos = lerProdutos();
  return produtos.filter(p =>
    p.nome.toLowerCase().includes(nome.toLowerCase())
  );
}

function atualizarProduto(id, novosDados) {
  const produtos = lerProdutos();
  const index = produtos.findIndex(p => p.id === id);

  if (index === -1) return false;

  produtos[index] = { ...produtos[index], ...novosDados };
  salvarProdutos(produtos);
  return true;
}

function excluirProduto(id) {
  const produtos = lerProdutos();
  const filtrados = produtos.filter(p => p.id !== id);

  if (filtrados.length === produtos.length) return false;

  salvarProdutos(filtrados);
  return true;
}

module.exports = {
  adicionarProduto,
  listarProdutos,
  buscarProdutoPorId,
  buscarProdutoPorNome,
  atualizarProduto,
  excluirProduto
};