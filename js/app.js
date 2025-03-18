const menuItems = document.querySelectorAll("#h-sobre, #h-projetos, #h-contato");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});