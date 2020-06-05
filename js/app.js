const enlace = document.createElement('a');

// agregamos un enlace 
enlace.className = "enlace";
// añadir un id 
enlace.id = 'nuevo-id';
// atributo de href 
enlace.setAttribute('href', '#');
// añadir textos 
enlace.textContent = 'Nuevo enlace';

document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);