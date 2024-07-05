let listaDeNumerosSorteados = [];
let numMax = 20;
let numAleatorio = gerarNumeroAleatorio();
console.log (numAleatorio);
let contador = 1;

mensagemInicial();


function exibeTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
    //Esse código abaixo vai habilitar uma fala para o nosso jogo, ela só é possível por conta de um código especifico no HTML
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}
function mensagemInicial(){
    exibeTextoNaTela('h1', 'Jogo do número secreto');
    exibeTextoNaTela('p',`Escolha um número de 1 a ${numMax}` );
    
}


function gerarNumeroAleatorio(){
   let numSecreto = parseInt(Math.random()* numMax + 1);
   let quantidadeLista = listaDeNumerosSorteados.length;
   if (quantidadeLista == numMax){
    listaDeNumerosSorteados = [];
   }
    if(listaDeNumerosSorteados.includes(numSecreto)){
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numSecreto);
        return numSecreto;  
    }
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute==numAleatorio){
        let tentativa = contador>1 ? 'tentativas' : 'tentativa';
        let textoAcertou = `Voce acertou o numero secreto com ${contador} ${tentativa}`;

        exibeTextoNaTela('h1', 'Parabéns!!');
        exibeTextoNaTela('p', textoAcertou);

        document.getElementById('reiniciar').removeAttribute('disabled');
        //Como tenho dois elementos do mesmo (botões), é bom usar o nome especifico dele, por isso pegar do id
    }
    else{
        if(chute>numAleatorio){
            exibeTextoNaTela('p', 'O numero secreto é menor');
        } else{
            exibeTextoNaTela('p', 'O numero secreto é maior');
        }
        contador++;
        limpaChute();
    }
}

function limpaChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
     numAleatorio = gerarNumeroAleatorio();
     console.log (numAleatorio);
     contador = 1;
     mensagemInicial();
     limpaChute();
     document.getElementById('reiniciar').setAttribute('disabled', true);

}


