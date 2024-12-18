
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

// Botão próxima sessão
document.querySelector(".proximo").addEventListener("click", function () { 
    var nextSection = document.querySelector(".enquadrando"); 
    nextSection.scrollIntoView({ behavior: 'smooth' }); 
});

//O QUE NOSSOS PARCEIROS ESTÃO FALANDO
let count = 1;
let intervalId = setInterval(nextImage, 7000);

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
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.button-topo')
    scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// efeito mobile
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();


document.querySelector(".navegacao-mobile").addEventListener("click", function () {
    var element = document.querySelector(".nav-list");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
});