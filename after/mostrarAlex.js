function mostrarAlex() {
	let tela = document.querySelector("canvas");
	let pincel = tela.getContext("2d");
	//cabeça
	pincel.fillStyle = "#f2dbbd"; //bege claro
	pincel.fillRect(215, 30, 200, 195);
	pincel.fillStyle = "#aa895e"; //bege claro
	pincel.fillRect(215, 203, 200, 2); //linhacabeça

	//cabelo
	pincel.fillStyle = "#e58d3f"; //laranja
	pincel.fillRect(215, 30, 200, 40);
	pincel.fillRect(290, 70, 25, 20);
	pincel.fillRect(360, 70, 25, 20);
	pincel.fillRect(215, 70, 75, 40); //lateral esquerda
	pincel.fillRect(385, 70, 30, 40); //lateral direita

	//rosto
	pincel.fillStyle = "white";
	pincel.fillRect(245, 110, 45, 20); //olho esquerdo
	pincel.fillRect(340, 110, 45, 20); //olho direito
	pincel.fillStyle = "#236224"; //verde
	pincel.fillRect(270, 110, 20, 20); //púpila esquerda
	pincel.fillRect(340, 110, 20, 20); //pupila direita
	pincel.fillStyle = "#efbbb1"; //rosa bb
	pincel.fillRect(290, 150, 45, 20); // boca

	//blusa
	pincel.fillStyle = "#8bba88"; //verde
	pincel.fillRect(150, 225, 330, 240);
	pincel.fillRect(150, 205, 90, 20);
	pincel.fillRect(440, 205, 40, 20);
	pincel.fillStyle = "#868761"; // marron esverdeado
	pincel.fillRect(240, 205, 25, 20); //1Q golablusa
	pincel.fillRect(240, 225, 25, 20); //2Q golablusa
	pincel.fillRect(265, 245, 25, 20); //3Q golablusa
	pincel.fillRect(290, 265, 50, 20); //4e5Q golablusa
	pincel.fillRect(150, 285, 65, 20); //manga esquerda
	pincel.fillRect(415, 285, 65, 20); //manga direita
	pincel.fillStyle = "#f2dbbd ";
	pincel.fillRect(265, 225, 100, 20); //decotecima
	pincel.fillRect(290, 245, 50, 20); //decotebaixo
	pincel.fillRect(150, 305, 65, 165); // braço esquerdo
	pincel.fillRect(415, 305, 65, 165); // braço direito

	//rabo de cavalo
	pincel.fillStyle = "#e58d3f"; //laranja
	pincel.fillRect(340, 205, 100, 20); //1linha
	pincel.fillRect(360, 225, 80, 20); //2linha
	pincel.fillRect(340, 245, 80, 20); //3linha
	pincel.fillRect(340, 265, 55, 20); //4linha
	pincel.fillRect(340, 285, 30, 20); //5linha

	//calça
	pincel.fillStyle = "#183816"; //verde escuro
	pincel.fillRect(215, 415, 200, 25); //1º linha
	pincel.fillStyle = "#79553d"; //marron
	pincel.fillRect(215, 465, 200, 235);
	pincel.fillStyle = "#8bba88"; //verde
	pincel.fillRect(215, 465, 20, 25); //quadrado esquerdo
	pincel.fillRect(395, 465, 20, 25); //quadrado direito
	pincel.fillStyle = "gray";
	pincel.fillRect(215, 600, 200, 100); //tenis
}
