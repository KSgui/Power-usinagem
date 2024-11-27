
//EMPRESA ANTES - EMPRESA DEPOIS 
const container = document.getElementById('antes-depois');
const setas = document.getElementById('setas');

function atualizarPosicaoSetas(e) {
    const rect = container.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    container.querySelector('.imagem2').style.clipPath = `inset(0 ${rect.width - xPos}px 0 0)`;
    setas.style.left = `${xPos}px`;
}

container.addEventListener('mousemove', atualizarPosicaoSetas);

window.addEventListener('load', () => {
    const rect = container.getBoundingClientRect();
    const xPos = rect.width / 2;
    container.querySelector('.imagem2').style.clipPath = `inset(0 ${rect.width - xPos}px 0 0)`;
    setas.style.left = `${xPos}px`;
});



//O QUE NOSSOS PARCEIROS ESTÃO FALANDO
let count = 1;
let intervalId = setInterval(nextImage, 5000);

document.getElementById("radio1").checked = true;

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    clearInterval(intervalId);
});

document.addEventListener("mouseup", function (event) {
    if (event.button === 2) {
        intervalId = setInterval(nextImage, 4000);
    }
});

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}


// BOTÃO VOLTAR AO TOPO
function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}