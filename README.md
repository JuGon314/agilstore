# 🏪 AgilStore — Sistema de Gerenciamento de Produtos (CLI)

Este projeto foi desenvolvido como parte do **Exercício de Programação – 2026/1**, proposto pela **PUCRS**, com o objetivo de aplicar conceitos fundamentais de programação em JavaScript utilizando **Node.js**, organização de código, manipulação de dados e persistência em arquivos.

A aplicação simula um **sistema de gerenciamento de inventário** para uma loja fictícia de eletrônicos chamada **AgilStore**, permitindo que produtos sejam cadastrados, listados, buscados, atualizados e removidos diretamente pelo terminal.

---

## 🎯 Objetivo do Projeto

O principal objetivo deste repositório é:

- Substituir um controle manual de estoque (planilhas) por uma **solução automatizada**
- Aplicar conceitos de **CRUD** (Create, Read, Update, Delete)
- Demonstrar organização de código, clareza lógica e boas práticas
- Criar uma aplicação simples, porém **realista**, semelhante ao que é utilizado no mercado

Este projeto também funciona como **material de estudo e referência futura**, servindo como base para aplicações maiores.

---

## 🧠 Decisões Técnicas

### 📌 Por que Node.js?

- Permite executar JavaScript fora do navegador
- Ideal para aplicações de terminal (CLI)
- Possui módulos nativos como `fs`, `path` e `readline`
- Muito utilizado no mercado para ferramentas internas e automações

---

### 📌 Por que uma aplicação de terminal (CLI)?

- O enunciado permite interações via terminal
- O foco fica totalmente na **lógica da aplicação**
- Facilita testes, aprendizado e entendimento do fluxo
- Excelente para treinar pensamento estruturado

---

### 📌 Por que persistência em JSON?

- Simples de implementar
- Fácil de ler e depurar
- Não exige banco de dados
- Ideal para projetos pequenos e didáticos

O arquivo `produtos.json` funciona como um **mini banco de dados local**.

---

### 📌 Por que separar o código em arquivos?

O projeto segue o princípio da **responsabilidade única**, onde cada arquivo possui um papel bem definido:

| Arquivo | Responsabilidade |
|------|----------------|
| `index.js` | Ponto de entrada da aplicação |
| `menu.js` | Interface do usuário (terminal) |
| `produtoService.js` | Regras de negócio |
| `storage.js` | Leitura e gravação do JSON |

Essa separação torna o código:
- Mais organizado
- Mais legível
- Mais fácil de manter
- Mais próximo de padrões profissionais

---

## 🗂️ Estrutura do Projeto

```text
agilstore/
│
├── data/
│   └── produtos.json       # Persistência dos dados
│
├── src/
│   ├── index.js            # Inicialização da aplicação
│   ├── menu.js             # Menu e interação via terminal
│   ├── produtoService.js   # Regras de negócio
│   └── storage.js          # Leitura e escrita no JSON
│
├── README.md
└── package.json

```
---

## 🧩 Funcionamento Interno do Sistema

### 📦 Estrutura de um Produto

Cada produto é representado pelo seguinte modelo:

```js
{
  id: number,
  nome: string,
  categoria: string,
  quantidade: number,
  preco: number
}

```

### 🆔 Geração Automática de ID

O ID do produto é gerado automaticamente com base no maior ID já existente no arquivo de dados:

- Evita duplicidade de identificadores
- Remove a responsabilidade de definição do ID do usuário
- Simula o comportamento de bancos de dados reais

### 🧠 Camada de Regras de Negócio (`produtoService.js`)

Responsável por toda a lógica do sistema, incluindo:

- Adição de novos produtos
- Listagem do inventário
- Busca de produtos por ID ou nome
- Atualização de informações
- Exclusão de produtos

Essa camada não possui qualquer dependência da interface de usuário, o que torna o código mais limpo, reutilizável e fácil de manter.

### 💾 Persistência de Dados (`storage.js`)

Responsável por:

- Ler o conteúdo do arquivo `produtos.json`
- Converter os dados JSON em objetos JavaScript
- Salvar alterações de forma persistente no arquivo

Esse mecanismo garante que os dados do inventário permaneçam disponíveis mesmo após o encerramento da aplicação.

### 🖥️ Interface do Usuário (`menu.js`)

- Exibe o menu principal no terminal
- Captura entradas do usuário
- Valida opções selecionadas
- Controla o fluxo da aplicação
- Chama os serviços apropriados conforme a ação escolhida

Utiliza o módulo nativo `readline` do Node.js para interação com o terminal.

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 16 ou superior recomendada)

### Passo a passo

1. Clone o repositório:
```bash
git clone https://github.com/JuGon314/agilstore
```

2. Acesse a pasta do projeto:
```bash
cd agilstore
```

3. Execute a aplicação:
```bash
node src/index.js
```
