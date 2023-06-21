// efeito carrosel
let count = 1;
document.getElementById("radio1").checked=true;

setInterval( function(){
    nextImage();
}, 7000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked=true;
}
//fim efeito carrosel


//abrindo tela modal de login

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

//trocar imagem mobile 

