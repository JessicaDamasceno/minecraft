function mostrar(){  
    let numero = document.getElementById('escolha');
    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');

    if(Number(numero.value) == 1){
        clear();
        mostrarCreeper();
        
    }else if(Number(numero.value) == 2){
        clear();
        mostrarZumbi();

    }else if(Number(numero.value) == 3){
        clear();
        mostrarSteve();
        
    }else if(Number(numero.value) == 4){
        clear();
        mostrarAlex();
    
    }else{
        alert('Número inválido!!');
        clear();
    } 

    function clear (){
        pincel.fillStyle = 'white';
        pincel.fillRect(0,0,tela.width,tela.height);
        numero.value = '';
        numero.focus();
    }
}