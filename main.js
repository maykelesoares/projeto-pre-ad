let name = prompt('Seja bem-vindo! Qual o seu nome?');
let olaVisita = document.getElementById('olaVisita');
olaVisita.innerHTML = ('Olá, ' + name + '!');

let respostaCorreta1 = document.getElementById('respostaCorreta1');
let respostaErrada1 = document.getElementById('respostaErrada1');

let respostaCorreta2 = document.getElementById('respostaCorreta2');
let respostaErrada2 = document.getElementById('respostaErrada2');

let respostaCorreta3 = document.getElementById('respostaCorreta3');
let respostaErrada3 = document.getElementById('respostaErrada3');


let playGame = prompt('Vamos jogar, ' + name + '? \n 1 - Sim  2 - Não' )
if(playGame == 2){
    alert('Obrigada pela visita')
}else{
    let question1 = prompt('Quantas vidas um gato tem? \n 1-Duas vidas \n 2-Quatro vidas \n 3-Sete vidas');
let resposta1 = 3;
let question2 = prompt('Em que lugar vivem mais cangurus do que pessoas? \n 1-Austrália \n 2 - Nova Zelândia \n 3- Indonésia')
let resposta2 = 1;
let question3 = prompt('Quantos braços tem um polvo? \n 1- Seis \n 2- Oito  \n 3- Dez')
let resposta3 = 2;



if(question1 == 3){
    respostaCorreta1.innerHTML = ('Resposta 1')
}else{
    respostaErrada1.innerHTML = ('Resposta 1')
}

if(question2 == 1){
    respostaCorreta2.innerHTML = ('Resposta 2')
}else{
    respostaErrada2.innerHTML = ('Resposta 2')
}

if(question3 == 2){
    respostaCorreta3.innerHTML = ('Resposta 3')
}else{
    respostaErrada3.innerHTML = ('Resposta 3')
}

 
}

