function mostraZumbi() {
	function desenhaRetangulo(x1, y1, x2, y2, cor) {
		pincel.fillStyle = cor;
		pincel.fillRect(x1, y1, x2, y2);
	}
	let tela = document.querySelector("canvas");
	let pincel = tela.getContext("2d");

	//cabeça
	desenhaRetangulo(240, 60, 140, 120, "green");
	desenhaRetangulo(260, 110, 35, 20, "black"); //olho esquerdo
	desenhaRetangulo(325, 110, 35, 20, "black"); //olho direito
	desenhaRetangulo(295, 130, 30, 20, "darkgreen"); //nariz
	desenhaRetangulo(295, 170, 30, 10, "darkgreen"); //boca
	desenhaRetangulo(285, 150, 10, 30, "darkgreen"); //boca lado esquerdo
	desenhaRetangulo(325, 150, 10, 30, "darkgreen"); //boca lado direito

	//cabelo
	desenhaRetangulo(240, 60, 140, 30, "darkgreen");
	desenhaRetangulo(240, 90, 20, 20, "darkgreen"); //lado esquerdo
	desenhaRetangulo(360, 90, 20, 20, "darkgreen"); //lado direito

	//blusa
	desenhaRetangulo(240, 180, 140, 300, "rgb(66, 209, 202)");
	desenhaRetangulo(195, 250, 45, 140, "green"); //braço esquerdo
	desenhaRetangulo(380, 250, 45, 140, "green"); //braço direito
	desenhaRetangulo(195, 180, 230, 70, "rgb(66, 209, 202)"); //mangas
	desenhaRetangulo(285, 180, 50, 20, "green"); //gola cima
	desenhaRetangulo(295, 200, 30, 15, "green"); //gola baixo

	//calça
	desenhaRetangulo(240, 360, 140, 190, "rgb(68, 32, 133)");
	//caimento da blusa
	desenhaRetangulo(340, 360, 40, 20, "rgb(66, 209, 202)");
	desenhaRetangulo(360, 380, 20, 20, "rgb(66, 209, 202)");

	//pés
	desenhaRetangulo(240, 550, 140, 50, "gray");
}
