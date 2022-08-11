document.getElementById("comenzar").addEventListener("click", comenzarJuego);
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

function comenzarJuego() {
    mostrarPaneles();
    ocultarTutorial();
    eliminarBoton();
    cambiarPaneles();

}
let puntos = 0;
function cambiarPaneles() {

    paneles.forEach(panel => {
        let valorAleat = Math.floor(Math.random() * lista.length);
        let valor = lista[valorAleat];
        panel.textContent = valor;

        let claseAleat = Math.floor(Math.random() * lista.length);
        let clase = lista[claseAleat];
        panel.className = clase;

        panel.addEventListener("click", function (e) {
            let id = e.target.className;
            let valor = e.target;
            if (id === valor.textContent) {
                puntos++;
                console.log(puntos);
                document.getElementsByClassName("contador")[0].innerHTML = "Vas " + puntos + " aciertos";
            }
        });
    });
    setTimeout(cambiarPaneles, 2000);
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
    document.getElementById('estilos').href = "styles/style 2.css";
    this.classList.add('active')
}



