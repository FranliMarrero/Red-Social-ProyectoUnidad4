const botonPublicar = document.getElementById('boton-publicar');
const cuadroFlotante = document.querySelector('.cuadro-flotante');
const divContenedor = document.getElementById('miDiv');

botonPublicar.addEventListener('click', () => {
  divContenedor.style.display = 'block';
});

cuadroFlotante.addEventListener('submit', (e) => {
  e.preventDefault();

  // Captura la información del formulario
  const titulo = e.target.titulo.value;
  const contenido = e.target.contenido.value;

});

document.addEventListener('DOMContentLoaded', function() {
  var cerrarBtn = document.getElementById('cerrarDiv');

  cerrarBtn.addEventListener('click', function() {
      divContenedor.style.display = 'none';
  });
});



