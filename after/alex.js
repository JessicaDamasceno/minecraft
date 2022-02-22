function mostraAlex() {
	function desenhaRetangulo(x1, y1, x2, y2, cor) {
		pincel.fillStyle = cor;
		pincel.fillRect(x1, y1, x2, y2);
	}
	let tela = document.querySelector("canvas");
	let pincel = tela.getContext("2d");

	//cabeça
	desenhaRetangulo(240, 60, 140, 120, "#f2dbbd");
	desenhaRetangulo(260, 115, 35, 15, "#ffffff"); //olho esquerdo
	desenhaRetangulo(275, 115, 20, 15, "#236224"); //pupila esquerda
	desenhaRetangulo(325, 115, 35, 15, "#ffffff"); //olho direito
	desenhaRetangulo(325, 115, 20, 15, "#236224"); //pupila direita
	desenhaRetangulo(295, 145, 30, 15, "#efbbb1"); //nariz

	//blusa
	desenhaRetangulo(240, 180, 140, 300, "#8bba88");
	desenhaRetangulo(195, 250, 45, 140, "#f2dbbd"); //braço esquerdo
	desenhaRetangulo(380, 250, 45, 140, "#f2dbbd"); //braço direito
	desenhaRetangulo(195, 180, 230, 70, "#8bba88"); //manga
	desenhaRetangulo(195, 235, 45, 15, "#868761"); //ponta da manga esquerda
	desenhaRetangulo(380, 235, 45, 15, "#868761"); //ponta da manga direita
	desenhaRetangulo(260, 180, 15, 15, "#868761"); //gola1
	desenhaRetangulo(260, 195, 15, 15, "#868761"); //gola1
	desenhaRetangulo(275, 210, 15, 15, "#868761"); //gola3
	desenhaRetangulo(290, 225, 15, 15, "#868761"); //gola4
	desenhaRetangulo(305, 225, 15, 15, "#868761"); //gola4
	desenhaRetangulo(320, 225, 15, 15, "#868761"); //gola4

	//cabelo
	desenhaRetangulo(240, 60, 140, 30, "#e58d3f");
	desenhaRetangulo(240, 90, 55, 25, "#e58d3f"); //lado esquerdo baixo
	desenhaRetangulo(240, 90, 70, 15, "#e58d3f"); //lado esquerdo cima
	desenhaRetangulo(340, 90, 40, 15, "#e58d3f"); //lado direito cima
	desenhaRetangulo(360, 100, 20, 15, "#e58d3f"); //lado direito baixo
	//rabo de cavalo
	desenhaRetangulo(325, 180, 65, 15, "#e58d3f"); //linha 1
	desenhaRetangulo(340, 195, 50, 15, "#e58d3f"); //linha 2
	desenhaRetangulo(325, 210, 50, 15, "#e58d3f"); //linha 3
	desenhaRetangulo(325, 225, 35, 15, "#e58d3f"); //linha 4
	desenhaRetangulo(325, 240, 20, 15, "#e58d3f"); //linha 5

	//pescoço
	desenhaRetangulo(275, 180, 50, 15, "#f2dbbd"); //linha 1
	desenhaRetangulo(275, 195, 65, 15, "#f2dbbd"); //linha 2
	desenhaRetangulo(290, 210, 35, 15, "#f2dbbd"); //linha 3

	//calça
	desenhaRetangulo(240, 360, 140, 190, "#79553d");
	desenhaRetangulo(240, 360, 15, 20, "#8bba88"); //caimento da blusa esquerdo
	desenhaRetangulo(365, 360, 15, 20, "#8bba88"); //caimento da blusa direito
	desenhaRetangulo(240, 330, 140, 15, "#183816"); //cinto

	//pés
	desenhaRetangulo(240, 490, 140, 110, "gray");
}
