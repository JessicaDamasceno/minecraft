let numero = document.querySelector(".numero");
let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

function clear() {
	pincel.clearRect(0, 0, tela.width, tela.height);
	numero.value = "";
	numero.focus();
}
function mostra() {
	if (numero.value == 1) {
		clear();
		mostraCreeper();
	} else if (numero.value == 2) {
		clear();
		mostraZumbi();
	} else if (numero.value == 3) {
		clear();
		mostraSteve();
	} else if (numero.value == 4) {
		clear();
		mostraAlex();
	} else {
		clear();
		alert("Número inválido!! Tente novamente.");
	}
}
