// Array para armazenar os itens do carrinho
const carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  const item = {
    nome: nome,
    preco: preco,
    quantidade: 1
  };

  carrinho.push(item);

  atualizarCarrinho();
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);

  atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho na página
function atualizarCarrinho() {
  const itensCarrinho = document.getElementById("itens-carrinho");
  const totalCarrinho = document.getElementById("total-carrinho");

  // Calcular total
  let total = 0;

  // Limpar conteúdo do carrinho
  itensCarrinho.innerHTML = "";

  // Verificar se o carrinho está vazio
  if (carrinho.length === 0) {
    const li = document.createElement("li");
    li.innerText = "Carrinho está vazio";
    itensCarrinho.appendChild(li);
  } else {
    // Percorrer os itens do carrinho
    for (let i = 0; i < carrinho.length; i++) {
      const item = carrinho[i];

      // Criar elemento de lista para exibir o item no carrinho
      const li = document.createElement("li");

      // Criar controles de entrada de quantidade
      const quantidadeInput = document.createElement("input");
      quantidadeInput.type = "number";
      quantidadeInput.min = 1;
      quantidadeInput.value = item.quantidade;
      quantidadeInput.addEventListener("change", function() {
        const novaQuantidade = parseInt(this.value);
        if (novaQuantidade > 0) {
          item.quantidade = novaQuantidade;
          atualizarCarrinho();
        }
      });

      // Criar botão de remoção
      const removerBtn = document.createElement("button");
      removerBtn.innerText = "Remover";
      removerBtn.addEventListener("click", function() {
        removerDoCarrinho(i);
      });

      li.innerHTML = `
        ${item.nome} - R$ ${item.preco.toFixed(2)} - Quantidade: `;
      li.appendChild(quantidadeInput);
      li.appendChild(removerBtn);
      itensCarrinho.appendChild(li);

      // Somar o preço do item multiplicado pela quantidade ao total
      total += item.preco * item.quantidade;
    }
  }

  // Verificar se o carrinho está vazio novamente após atualizar a exibição
  if (carrinho.length === 0) {
    const li = document.createElement("li");
    li.innerText = "Carrinho está vazio";
    itensCarrinho.appendChild(li);
  }

  // Atualizar total do carrinho
  totalCarrinho.innerText = total.toFixed(2);
}