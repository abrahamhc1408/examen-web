document.querySelector('.dropdown').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el clic se propague
    this.querySelector('.dropdown-content').classList.toggle('show');
});

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
document.querySelector('.drop').addEventListener('click', function(event) {
        const dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        event.preventDefault(); // Para prevenir que el enlace se siga
    });

let indice = 0;

function mostrarImagen(indice) {
    const imagenes = document.querySelector('.imagenes');
    const totalImagenes = imagenes.children.length;
    
    if (indice >= totalImagenes) {
        indice = 0;
    } else if (indice < 0) {
        indice = totalImagenes - 1;
    }

    const desplazamiento = -indice * 100; // Cambia el 100 por el ancho de la imagen en porcentaje
    imagenes.style.transform = `translateX(${desplazamiento}%)`;
    return indice;
}

function cambiarImagen(direccion) {
    indice += direccion;
    indice = mostrarImagen(indice);
}

// Mostrar la primera imagen al cargar
mostrarImagen(indice);