let tipoJuego = document.getElementById("comenzar");
if(tipoJuego.className === "tiempo"){
    document.getElementById("comenzar").addEventListener("click", tiempo);
}else{
    document.getElementById("comenzar").addEventListener("click", comenzarJuego);
}

let dificultad = document.getElementById("comenzar").className;

if (dificultad == "facil") {
    dificultad = 2500;
} else if (dificultad == "media") {
    dificultad = 2000;
} else {
    dificultad = 1000;
}

/**
 * Lista de colores
 */
lista = [
    "Rojo",
    "Verde",
    "Negro",
    "Naranja",
    "Azul",
    "Amarillo",
];

/**
 * Cojo la lista de paneles
 */
let paneles = document.querySelectorAll(".paneles p");

/**
 * Se le añade a cada panel un evento "onclick" llamando a la funcion "controlarClick"
 */
paneles.forEach(panel=>{
    panel.addEventListener("click", function(e){
        controlarClick(e);
    })
});

/**
 * Funcion que elimina el boton y el input al comenzar el juego
 */
function eliminarBoton() {
    let borrar = document.querySelector(".iniciar");
    while (borrar.firstChild) {
        borrar.removeChild(borrar.firstChild);
    }
}

/**
 * Al comenzar el juego oculta el tutorial
 */
function ocultarTutorial() {
    let tutorial = document.querySelector(".explicacion");
    while (tutorial.firstChild) {
        tutorial.removeChild(tutorial.firstChild);
    }

}

/**
 * Se muestran los paneles para el juego
 */
function mostrarPaneles() {
    paneles.forEach(panel => {
        panel.style.display = "inline";
    })
}

/**
 * Funcion que se encarga de iniciar el juego
 */
function comenzarJuego() {
    mostrarPaneles();
    ocultarTutorial();
    eliminarBoton();
    cambiarPaneles();
}

//Contador de puntos
let puntos = 0;
/**
 * Funcion que se encarga de incrementar el contador
 */
function incrementarContador() {
    puntos++;
}

/**
 * Funcion que comprueba la clase y el textContent del panel que dispara el evento.
 * Si la clase y el textContent tienen el mismo valor llama a "incrementarContador"
 * y actualiza el conteo de puntos.
 * @param {*} e panel que dispara el evento.
 */
function controlarClick(e) {
    let id = e.target.className;
    let valor = e.target.textContent;
    if (id === valor) {
        incrementarContador();
        document.getElementById("cuenta").innerHTML = `Vas ${puntos} aciertos`;
    }
}

/**
 * Funcion que recorre la lista de paneles, por cada panel en la lista
 * coge un color aleatorio de la lista y lo añade como "textContent" del panel.
 * Luego coge otro color aleatorio de la lista y lo añade como clase del panel.
 * 
 * Pasado el tiempo que corresponda a la dificultad, se vuelve a llamar a si misma.
 */
function cambiarPaneles() {
    paneles.forEach(panel => {
        let valorAleat = Math.floor(Math.random() * lista.length);
        let valor = lista[valorAleat];
        panel.textContent = valor;

        let claseAleat = Math.floor(Math.random() * lista.length);
        let clase = lista[claseAleat];
        panel.className = clase;
    });
    setTimeout(cambiarPaneles, dificultad);
}

/**
 * Al clickar en el boton con el sol se carga la hoja de estilos del modo claro y se desactiva el boton de la luna
 */
document.getElementById('id-sun').onclick = function () {
    document.getElementById('id-moon').classList.remove('active');
    document.getElementById('estilos').href = "styles/style.css";
    this.classList.add('active');
}

/**
 * Al clickar en el boton con la luna se carga la hoja de estilos del modo oscuro y se desactiva el boton del sol
 */
document.getElementById('id-moon').onclick = function () {
    document.getElementById('id-sun').classList.remove('active');
    document.getElementById('estilos').href = "styles/style-dark.css";
    this.classList.add('active')
}

function tiempo(){
    let tiempo = document.getElementById("tiempo").value;
    tiempo = tiempo*60000;
    let limite = new Date();
    limite.setTime(limite.getTime()+tiempo);
    let fecha = new Date();
    resta = limite.getTime()-fecha.getTime();
    console.log(resta)
}




