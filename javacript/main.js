// Carrusel de Imágenes
let index = 0;

function mostrarImagen() {
    const images = document.querySelectorAll('.carousel img');
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

function siguienteImagen() {
    index = (index + 1) % document.querySelectorAll('.carousel img').length;
    mostrarImagen();
}

function imagenAnterior() {
    index = (index - 1 + document.querySelectorAll('.carousel img').length) % document.querySelectorAll('.carousel img').length;
    mostrarImagen();
}

setInterval(siguienteImagen, 5000); // Cambiar de imagen cada 5 segundos

// Función de la Barra de Búsqueda
document.getElementById('search-input').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('.destino-item');
    items.forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', mostrarImagen);
