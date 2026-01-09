const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'produtos.json');

function lerProdutos() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function salvarProdutos(produtos) {
  fs.writeFileSync(filePath, JSON.stringify(produtos, null, 2));
}

module.exports = { lerProdutos, salvarProdutos };