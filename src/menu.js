const readline = require('readline');
const service = require('./produtoService');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log(`
1 - Adicionar Produto
2 - Listar Produtos
3 - Buscar Produto
4 - Atualizar Produto
5 - Excluir Produto
0 - Sair
`);
  rl.question('Escolha uma opção: ', opcao => {
    switch (opcao) {
      case '1':
        adicionar();
        break;
      case '2':
        listar();
        break;
      case '3':
        buscar();
        break;
      case '4':
        atualizar();
        break;
      case '5':
        excluir();
        break;
      case '0':
        rl.close();
        break;
      default:
        console.log('Opção inválida');
        menu();
    }
  });
}

function adicionar() {
  rl.question('Nome: ', nome => {
    rl.question('Categoria: ', categoria => {
      rl.question('Quantidade: ', quantidade => {
        rl.question('Preço: ', preco => {
          service.adicionarProduto(
            nome,
            categoria,
            Number(quantidade),
            Number(preco)
          );
          console.log('Produto adicionado!');
          menu();
        });
      });
    });
  });
}

function listar() {
  const produtos = service.listarProdutos();
  console.table(produtos);
  menu();
}

function buscar() {
  rl.question('Buscar por (1) ID ou (2) Nome? ', tipo => {
    if (tipo === '1') {
      rl.question('ID: ', id => {
        const produto = service.buscarProdutoPorId(Number(id));
        console.log(produto || 'Produto não encontrado');
        menu();
      });
    } else {
      rl.question('Nome: ', nome => {
        const produtos = service.buscarProdutoPorNome(nome);
        console.table(produtos);
        menu();
      });
    }
  });
}

function atualizar() {
  rl.question('ID do produto: ', id => {
    const produto = service.buscarProdutoPorId(Number(id));
    if (!produto) {
      console.log('Produto não encontrado');
      return menu();
    }

    rl.question('Novo nome: ', nome => {
      rl.question('Nova categoria: ', categoria => {
        rl.question('Nova quantidade: ', quantidade => {
          rl.question('Novo preço: ', preco => {
            service.atualizarProduto(Number(id), {
              nome,
              categoria,
              quantidade: Number(quantidade),
              preco: Number(preco)
            });
            console.log('Produto atualizado!');
            menu();
          });
        });
      });
    });
  });
}

function excluir() {
  rl.question('ID do produto: ', id => {
    const sucesso = service.excluirProduto(Number(id));
    console.log(sucesso ? 'Produto excluído' : 'Produto não encontrado');
    menu();
  });
}

module.exports = menu;