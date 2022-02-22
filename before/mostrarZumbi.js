function mostrarZumbi(){
    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');
        //cabeça
    pincel.fillStyle = 'green';
    pincel.fillRect(215,30,200,175);
    
    //cabelo
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(215,30,200,50);
    pincel.fillRect(215,80,30,35); //lateral esquerda
    pincel.fillRect(385,80,30,35); //lateral direita

    //rosto
    pincel.fillStyle = 'black';
    pincel.fillRect(245,120,45,25); //olho esquerdo
    pincel.fillRect(335,120,45,25); //olho direito
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(290,145,45,25); // nariz
    pincel.fillRect(275,170,15,25); // boca lado esquerdo
    pincel.fillRect(335,170,15,25); // boca lado direito
    pincel.fillRect(275,190,75,15); // boca 

     //blusa
     pincel.fillStyle = 'rgb(66, 209, 202)';
     pincel.fillRect(150,205,330,260);
     pincel.fillStyle = 'green';
     pincel.fillRect(275,205,75,20); //gola cima
     pincel.fillRect(290,225,45,20); //gola baixo
     pincel.fillRect(150,300,65,165); // braço esquerdo
     pincel.fillRect(415,300,65,165); // braço direito

     //calça
     pincel.fillStyle = 'rgb(68, 32, 133)';
     pincel.fillRect(215,415,150,25); //1º linha
     pincel.fillRect(215,440,175,25); //2º linha
     pincel.fillRect(215,465,200,235);
     pincel.fillStyle = 'gray';
     pincel.fillRect(215,640,200,60); //tenis
}