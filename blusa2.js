const abrirModal = document.querySelector("#abrir_modal");
const fecharModal = document.querySelector("#fechar_modal");
const fade = document.querySelector("#fade");
const modal = document.querySelector("#modal");
const trocarModal = document.querySelector(".trocar_modal");

const abrirModal2 = document.querySelector(".abrir_modal2");
const fehcarModal2 = document.querySelector("#fechar_modal2");
const modal2 = document.querySelector("#modal2");
const fade2 = document.querySelector("#fade2");


const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[abrirModal, fecharModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});


const toggleModal2 = () => {
    [modal2, fade].forEach((el) => el.classList.toggle("hide"));
};

[abrirModal2, fehcarModal2].forEach((el) => {
    el.addEventListener("click", () => toggleModal2());
});


//butao de adicionar mais roupas

const btnAddBlusa = document.querySelector("#add_blusa");
const btnRemoverBlusa = document.querySelector("#remover_blusa");
let qtnBlusas = document.querySelector("#total");
let valorFinal = document.querySelector("#quantidade_final");
let preco = 280;
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

//trocando as blusas quando selecionado
const principal2 = document.querySelector(".imagem_produto.blusa2");
const op3 = document.querySelector(".imagens_produto.opcao3");
const op4 = document.querySelector(".opcao4");
const op5 = document.querySelector(".opcao5");
const op6 = document.querySelector(".opcao6");
const cor1 = document.querySelector(".cor_produto#cor1");
const cor2 = document.querySelector(".cor_produto#cor2");

function removerSelecionado(){
    const opcoes = [op3, op4, op5, op6];
    opcoes.forEach(opcao => {
        opcao.classList.remove('selecionado');
    });
}

op3.classList.add('selecionado');

op3.addEventListener('click', () => {
    principal2.style.backgroundImage = 'url(imagens/produtos/CAMISETA\\ PALACE\\ HESH\\ MIT\\ TEE.webp)';
    removerSelecionado();
    op3.classList.add('selecionado');
});

op4.addEventListener('click', () => {
    principal2.style.backgroundImage = 'url(imagens/produtos/CAMISETA\\ PALACE\\ HESH\\ MIT\\ TEE\\ \\(2\\).webp)';
    removerSelecionado();
    op4.classList.add('selecionado');
});

op5.addEventListener('click', () => {
    principal2.style.backgroundImage = 'url(imagens/produtos/CAMISETA\\ PALACE\\ HESH\\ MIT\\ TEE\\ \\(3\\).webp)';
    removerSelecionado();
    op5.classList.add('selecionado');
});

op6.addEventListener('click', () => {
    principal2.style.backgroundImage = 'url(imagens/produtos/CAMISETA\\ PALACE\\ HESH\\ MIT\\ TEE\\ \\(4\\).webp)';
    removerSelecionado();
    op6.classList.add('selecionado');
});

cor1.addEventListener('click', () => {
    principal2.style.backgroundImage = 'url(imagens/produtos/CAMISETA\\ PALACE\\ HESH\\ MIT\\ TEE.webp)';
});

cor2.addEventListener('click', () => {
    principal2.style.backgroundImage = 'url(imagens/produtos/CAMISETA\\ PALACE\\ HESH\\ MIT\\ TEE\\ \\(3\\).webp)';
});















