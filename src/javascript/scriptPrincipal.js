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