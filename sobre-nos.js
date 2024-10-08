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



// container.addEventListener('mousemove', (e) => {
//     const rect = container.getBoundingClientRect();
//     const xPos = e.clientX - rect.left;
//     const yPos = e.clientY - rect.top;
//     container.querySelector('.imagem2').style.clipPath = `inset(0 ${rect.width - xPos}px 0 0)`;
//     setas.style.left = `${xPos}px`;
// });