const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.onload =()=>{ 
  formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
  e.preventDefault();

  const terminoBusqueda = document.querySelector('#termino').value.trim();

  if (terminoBusqueda === ''){
    mostrarAlerta('Error, termino de busqueda no agregado');
    return;
  }
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector('.alerta');

  if (!existeAlerta) {
    const alerta = document.createElement('p');
    alerta.className = 'alerta';
    alerta.innerHTML = mensaje;
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}


function buscarImagenes(termino){
  const url = 'https://pixabay.com/api/?key=49547329-5f5a917eedf2fb607ff48be58&q=' + termino;
  console.log(url);
}


