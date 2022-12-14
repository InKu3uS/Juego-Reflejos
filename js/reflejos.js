document.getElementById("comenzar").addEventListener("click", comenzarJuego);
let dificultad = document.getElementById("comenzar").className;

if(dificultad == "facil") {
    dificultad = 2500;
}else if(dificultad == "media"){
    dificultad = 2000;
}else{
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

        panel.removeEventListener("click", sumarPuntos());
        
        let valorAleat = Math.floor(Math.random() * lista.length);
        let valor = lista[valorAleat];
        panel.textContent = valor;

        let claseAleat = Math.floor(Math.random() * lista.length);
        let clase = lista[claseAleat];
        panel.className = clase;

        //El evento se activa solo
        if(panel.textContent === panel.className){
            panel.addEventListener("click");
        }

        // panel.addEventListener("click", function (e) {
        //     let id = e.target.className;
        //     let valor = e.target;
        //     if (id === valor.textContent) {
        //         puntos++;
        //         console.log(puntos);
        //         document.getElementsByClassName("contador")[0].innerHTML = "Vas " + puntos + " aciertos";
        //     }
        // });
    });
    setTimeout(cambiarPaneles, dificultad);
}

function sumarPuntos(){
    puntos+=1;
    document.getElementsByClassName("contador")[0].innerHTML = "Vas " + puntos + " aciertos";
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



