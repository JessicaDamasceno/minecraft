function mostraCreeper() {
	function desenhaRetangulo(x1, y1, x2, y2, cor) {
		pincel.fillStyle = cor;
		pincel.fillRect(x1, y1, x2, y2);
	}
	let tela = document.querySelector("canvas");
	let pincel = tela.getContext("2d");

	//cabeça
	desenhaRetangulo(240, 60, 145, 120, "darkgreen");
	desenhaRetangulo(260, 90, 35, 35, "black"); //olho esquerdo
	desenhaRetangulo(330, 90, 35, 35, "black"); //olho direito
	desenhaRetangulo(295, 125, 35, 40, "black"); //nariz
	desenhaRetangulo(275, 145, 20, 35, "black"); //boca esquerda
	desenhaRetangulo(330, 145, 20, 35, "black"); //boca direita

	//corpo
	desenhaRetangulo(255, 180, 115, 240, "darkgreen");

	//pés
	desenhaRetangulo(245, 420, 135, 60, "darkgreen");
	desenhaRetangulo(245, 450, 15, 15, "black"); // 1
	desenhaRetangulo(260, 465, 15, 15, "black"); // 2
	desenhaRetangulo(275, 450, 15, 15, "black"); // 3
	desenhaRetangulo(290, 465, 15, 15, "black"); // 4
	desenhaRetangulo(305, 450, 15, 15, "black"); // 5
	desenhaRetangulo(320, 465, 15, 15, "black"); // 6
	desenhaRetangulo(335, 450, 15, 15, "black"); // 7
	desenhaRetangulo(350, 465, 15, 15, "black"); // 8
	desenhaRetangulo(365, 450, 15, 15, "black"); // 9
}
