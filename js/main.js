
const resultado = document.querySelector( "#resultado")
const formulario = document.querySelector("#formulario")


window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();
    const terminoBusqueda = document.querySelector('#termino').value.trim();
    if (terminoBusqueda === '') {
        mostrarAlerta('Error, no ha agregado un término de búsqueda');
        return; 
    }
    buscarImagenes(terminoBusqueda);
}


function mostrarAlerta(mensaje){
    const existeAlerta = document.querySelector(".alerta");
    if(!existeAlerta){
        const alerta = document.createElement('p');
        alerta.className = "alerta";
        alerta.innerHTML = mensaje;
        formulario.appendChild(alerta);   
        
        setTimeout(() =>{
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes(termino){
    const key = '49389642-ac93a7b768c33d60ce2c87622';
    const url = 'https://pixabay.com/api/?key=49389642-ac93a7b768c33d60ce2c87622&q=' + termino;
   /* const url = 'https://pixabay.com/api/?key=49389642-ac93a7b768c33d60ce2c87622&q=' + termino + '&per_page=100';*/
    //console.log(url);

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            //console.log(resultado);
            mostrarImagenes(resultado.hits)
        })
}

function mostrarImagenes(imagenes){
    //console.log(imagenes); 
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {
        const {previewURL, likes, views, largeImageURL} = imagen; //
        resultado.innerHTML  += `
        <div class = "contenido">
            <div class = "tarjeta">
                 <img src="${previewURL}">
                 <div class = "info-tarjeta">
                    <p class = "likes">${likes} <span>Me gusta</span></p>
                    <p class = "views">${views} <span>Me gusta</span></p>
                    <a href = "${largeImageURL}" target = "_blank">Ver Imagen</a>
                 </div>
            </div>
        </div>    
        `
    });
}