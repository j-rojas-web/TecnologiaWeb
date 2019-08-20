function MenuDesplegable() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function Hora(){
	var horaActual = new Date();

	var hora = horaActual.getHours();
	var minuto = horaActual.getMinutes();
	var segundo = horaActual.getSeconds();

	var imprimir = hora + ":" + minuto + ":" + segundo;
	document.getElementById('hora').innerHTML = imprimir;
}