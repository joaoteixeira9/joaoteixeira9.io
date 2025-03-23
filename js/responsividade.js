function ResponsividadeProjetos(){
    const texto = document.getElementById("texto-projetos");
    const foto = document.getElementById("foto-projetos");
    const fotoPi = document.getElementById("foto-pi");

    if(window.innerWidth <= 768){
        texto.classList.add('ms-0', 'text-center');
        texto.classList.remove('ms-5');
        foto.style.display = 'none';
        fotoPi.classList.add('w-75');
        fotoPi.classList.remove('w-50');
    }else{
        texto.classList.remove('ms-0', 'text-center');
        texto.classList.add('ms-5');
        foto.style.display = 'block';
        fotoPi.classList.remove('w-75');
        fotoPi.classList.add('w-50');
    }
}

window.addEventListener('resize', ResponsividadeProjetos);
ResponsividadeProjetos();