document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showCarouselItem(index) {
        // Ocultar todos los elementos
        items.forEach((item) => {
            item.style.display = 'none';
        });

        // Mostrar solo el elemento actual
        items[index].style.display = 'block';
    }

    function nextCarouselItem() {
        currentIndex = (currentIndex + 1) % totalItems; // Incrementa el índice
        showCarouselItem(currentIndex); // Muestra el siguiente elemento
    }

    // Iniciar carrusel
    showCarouselItem(currentIndex);
    setInterval(nextCarouselItem, 3000); // Cambia cada 3 segundos
});
