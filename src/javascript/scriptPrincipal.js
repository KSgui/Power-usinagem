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
    if (element.style.display === "block") { element.style.display = "none"; 
    } else { 
        element.style.display = "block"; 
    } 
});