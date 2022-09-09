class Jugador {
    constructor(id, equipo, nombre) {
      this.equipo = equipo;
      this.id = id;
      this.nombre = nombre;
    }

  }

/*   La idea de este ejemplo, sería llevar al usuario a elegir correctamente la participacion de ciertos jugadores, donde sorin seria una de las respuesta incorrectas, me gustaría poder validar el nombre soriny que mediante el evento, arroje un elemento P qué respuesta incorrecta.
  Puedo seguir muy las clases pero la hora de plasmarlo en mi código, se me hace incalcansable. Sin duda será cuestión de practicar.
  Muchas gracias, un saludo */

function addText(texto) {
    let textoDiv = document.querySelector("#texto");
    let crearP = document.createElement("p");
    textoDiv.append(crearP);
    crearP.innerHTML = texto;
  }

  function removeText() {
    let crearP = document.querySelector("#texto p");
    crearP.remove();
  }


  function prohibido1(texto) {
    let textoDiv = document.querySelector("#sorin");
    let crearP = document.createElement("p");
    textoDiv.append(crearP);
    crearP.innerHTML = texto;
  }
  
  
  function GuardarForm(texto) {
    let textoDiv = document.querySelector("#texto2");
    let crearP = document.createElement("p");
    textoDiv.append(crearP);
    crearP.innerHTML = texto;
  }


  function respuestaIncorrecta(texto) {
    let textoDiv = document.querySelector("#texto3");
    let crearP = document.createElement("p");
    textoDiv.append(crearP);
    crearP.innerHTML = texto;
  }
