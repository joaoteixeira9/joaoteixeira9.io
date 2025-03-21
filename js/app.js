const menuItems = document.querySelectorAll("#h-sobre, #h-projetos, #h-contato");
const navegacao = document.getElementsByTagName("nav")[0];

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});