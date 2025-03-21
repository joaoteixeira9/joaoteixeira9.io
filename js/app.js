const menuItems = document.querySelectorAll("#h-sobre, #h-projetos, #h-contato");
const navegacao = document.getElementsByTagName("nav")[0];

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

function Responsividade() {
    const sobre = document.getElementById("sobre");
    const div = document.getElementById("1div");
    const cards = document.querySelectorAll(".card-sobre");
    const cardp = document.querySelectorAll(".card-projeto");
    const itemp = document.querySelectorAll(".item-projeto");

    if (window.innerWidth <= 768) {
        sobre.classList.add('.');
        sobre.classList.remove('d-flex', 'justify-content-around', 'mb-5');
        div.classList.add('d-inline', 'w-100')
        div.classList.remove('d-flex','justify-content-around', 'w-75');
        cards.forEach(card => {
            card.classList.add('align-items-center', 'text-center', 'mb-5');
            card.classList.remove('w-25', 'border-end');
        });
        cardp.forEach(card => {
            card.classList.add('flex-column', 'align-items-center');
            card.classList.remove('justify-content-around')
        })
        itemp.forEach(item => {
            item.classList.add('mb-5')
        })
    } else {
        sobre.classList.add('d-flex', 'justify-content-around', 'mb-5');
        sobre.classList.remove('sobre');
        div.classList.remove('d-inline', 'w-100');
        div.classList.add('d-flex','justify-content-around', 'w-75');
        cards.forEach(card => {
            card.classList.remove('align-items-center', 'text-center', 'mb-5');
            card.classList.add('w-25');
        });
        cardp.forEach(card => {
            card.classList.remove('flex-column', 'align-items-center');
            card.classList.add('justify-content-around')
        })
        itemp.forEach(item => {
            item.classList.remove('mb-5')
        })
    }
}

window.addEventListener('resize', Responsividade);

Responsividade();