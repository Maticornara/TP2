// Seleccionar el gradiente animado
const gradient = document.querySelector('.animated-gradient');

// Agregar eventos a los botones
document.querySelectorAll('.button-container .boton').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar la redirección inmediata

    // Detectar el botón presionado y aplicar clase correspondiente
    if (button.classList.contains('hit')) {
      gradient.classList.add('hit'); // Cambiar a gradiente HIT
    } else if (button.classList.contains('flop')) {
      gradient.classList.add('flop'); // Cambiar a gradiente FLOP
    }

    // Redirigir después de 2 segundos
    setTimeout(() => {
      const target = button.getAttribute('data-target');
      window.location.href = target; // Redirigir a la URL
    }, 2000);
  });
});
