

//butao de adicionar mais roupas

const btnAddBlusa = document.querySelector("#add_blusa");
const btnRemoverBlusa = document.querySelector("#remover_blusa");
let qtnBlusas = document.querySelector("#total");
let valorFinal = document.querySelector("#quantidade_final");
let preco = 210;
let valor = 1;



btnAddBlusa.addEventListener('click', () => {
    if(valor <= 9){
        valor++;
        qtnBlusas.placeholder = valor;
        valorFinal.innerHTML = preco * valor + ",00";
    }
});

btnRemoverBlusa.addEventListener('click', () => {
    if(valor > 1){
        valor--;
        qtnBlusas.placeholder = valor;
        if(valor > 1){
            valorFinal.innerHTML = preco * valor + ",00";
        }else{
            valorFinal.innerHTML = preco + ",00";
        }
    }
});

//blusa selecionada
const principal = document.querySelector(".imagem_produto");
const op1 = document.querySelector(".opcao1");
const op2 = document.querySelector(".opcao2");

function removerSelecionado(){
    const opcoes = [op1, op2];
    opcoes.forEach(opcao => {
        opcao.classList.remove('selecionado');
    });
}

op1.classList.add('selecionado');

op1.addEventListener('click', () => {
    principal.style.backgroundImage = 'url(imagens/produtos/CAMISETA\\ ASSC\\ SPIDER.webp)';
    removerSelecionado();
    op1.classList.add('selecionado');
});

op2.addEventListener('click', () => {
    principal.style.backgroundImage = 'url(imagens/produtos/CAMISETA\\ ASSC\\ SPIDER\\ \\(2\\).webp)';
    removerSelecionado();
    op2.classList.add('selecionado');
});
















