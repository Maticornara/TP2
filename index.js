function moverLogoYRedirigir() {
    // Seleccionamos el logo
    var logo = document.querySelector('.logo');
    
    // Añadimos la clase que mueve el logo
    logo.classList.add('move-left');
    
    // Esperamos el tiempo de la animación (500ms) antes de redirigir
    setTimeout(function() {
      window.location.href = "bajada.html"; // Cambia esto con la URL correcta
    }, 500); // La duración de la animación es de 500ms
}