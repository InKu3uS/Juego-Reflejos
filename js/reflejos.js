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
 function eliminarBoton(){
    let borrar = document.querySelector(".iniciar");
    while (borrar.firstChild){
        borrar.removeChild(borrar.firstChild);
    }
}

function comenzarJuego (){
    eliminarBoton();
    cambiarPaneles();
    
}
let puntos=0;
function cambiarPaneles(){
    
    paneles.forEach(panel => {
        let valorAleat = Math.floor(Math.random()*lista.length);
        let valor = lista[valorAleat];
        panel.textContent = valor;
    
        let claseAleat = Math.floor(Math.random()*lista.length);
        let clase = lista[claseAleat];
        panel.className = clase;
        
        panel.addEventListener("click", function(e){
            let id = e.target.className;
            let valor = e.target;
            if(id===valor.textContent){
                puntos++;
                console.log(puntos);
                document.getElementsByClassName("contador")[0].innerHTML = "Vas "+puntos+" aciertos";
            }
        });
    });
    setTimeout(cambiarPaneles,2000);
}

/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
document.getElementById('id-sun').onclick = function(){
    document.getElementById('id-moon').classList.remove('active');
    document.getElementById('estilos').href = "styles/style.css";
    this.classList.add('active');
  }
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id page y se aplicará el estilo active a la luna*/
  document.getElementById('id-moon').onclick = function(){
    document.getElementById('id-sun').classList.remove('active');
    document.getElementById('estilos').href = "styles/style 2.css";
    this.classList.add('active')
  }


