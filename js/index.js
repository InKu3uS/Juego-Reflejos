
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
    this.classList.add('active');
}