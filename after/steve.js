function mostraSteve() {
	function desenhaRetangulo(x1, y1, x2, y2, cor) {
		pincel.fillStyle = cor;
		pincel.fillRect(x1, y1, x2, y2);
	}
	let tela = document.querySelector("canvas");
	let pincel = tela.getContext("2d");

	//cabeça
	desenhaRetangulo(240, 60, 140, 120, "#c89c7d");
	desenhaRetangulo(260, 110, 35, 20, "#ffffff"); //olho esquerdo
	desenhaRetangulo(275, 110, 20, 20, "rgb(38, 141, 238)"); //pupila esquerda
	desenhaRetangulo(325, 110, 35, 20, "#ffffff"); //olho direito
	desenhaRetangulo(325, 110, 20, 20, "rgb(38, 141, 238)"); //pupila direita
	desenhaRetangulo(295, 130, 30, 20, "#754738"); //nariz
	desenhaRetangulo(295, 170, 30, 10, "rgb(44, 35, 33)"); //boca
	desenhaRetangulo(285, 150, 10, 30, "rgb(44, 35, 33)"); //boca lado esquerdo
	desenhaRetangulo(325, 150, 10, 30, "rgb(44, 35, 33)"); //boca lado direito

	//cabelo
	desenhaRetangulo(240, 60, 140, 30, "rgb(44, 35, 33)");
	desenhaRetangulo(240, 90, 20, 20, "rgb(44, 35, 33)"); //lado esquerdo
	desenhaRetangulo(360, 90, 20, 20, "rgb(44, 35, 33)"); //lado direito

	//blusa
	desenhaRetangulo(240, 180, 140, 300, "rgb(66, 209, 202)");
	desenhaRetangulo(195, 250, 45, 140, "#c89c7d"); //braço esquerdo
	desenhaRetangulo(380, 250, 45, 140, "#c89c7d"); //braço direito
	desenhaRetangulo(195, 180, 230, 70, "rgb(66, 209, 202)"); //mangas
	desenhaRetangulo(285, 180, 50, 20, "#c89c7d"); //gola cima
	desenhaRetangulo(295, 200, 30, 15, "#c89c7d"); //gola baixo

	//calça
	desenhaRetangulo(240, 360, 140, 190, "rgb(68, 32, 133)");
	//caimento da blusa
	desenhaRetangulo(340, 360, 40, 20, "rgb(66, 209, 202)");
	desenhaRetangulo(360, 380, 20, 20, "rgb(66, 209, 202)");

	//pés
	desenhaRetangulo(240, 550, 140, 50, "gray");
}
