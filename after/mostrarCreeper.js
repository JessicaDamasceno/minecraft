function mostrarCreeper(){
    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');
    
    //cabeça
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(200,100,250,200);

    //rosto
    pincel.fillStyle = 'black';
    pincel.fillRect(240,140,60,60);//olho esquerdo
    pincel.fillRect(350,140,60,60);//olho direito
    pincel.fillRect(300,200,50,70);//nariz
    pincel.fillRect(270,230,30,70);//boca
    pincel.fillRect(350,230,30,70);//boca

    //corpo
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(225,300,200,275);

    //perna
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(220,570,210,100);

    //pés
    pincel.fillStyle = 'green';
    pincel.fillRect(220,640,210,60);
    pincel.fillStyle = 'black';
    pincel.fillRect(220,640,30,30);
    pincel.fillRect(250,670,30,30); //baixo
    pincel.fillRect(280,640,30,30);
    pincel.fillRect(310,670,30,30); //baixo
    pincel.fillRect(340,640,30,30);
    pincel.fillRect(370,670,30,30); //baixo
    pincel.fillRect(400,640,30,30);
}