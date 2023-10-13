// Classificador de nível de Herói
let input = prompt("Digite a xp")
let xp = parseInt(input);
let nome = "Super Felipe"
let classificacao = " " 

switch(xp){
    case(xp < 1000):
    classificacao = " Ferro"
    break

    case(xp > 1000 && xp <= 2000):
    classificacao = " Bronze"
    break

    case(xp > 2000 && xp <= 5000):
    classificacao = " Prata"
    break
    
    case(xp > 6000 && xp <= 7000):
    classificacao = " Ouro"
    break

    case(xp > 7000 && xp <= 8000):
    classificacao = " Platina"
    break

    case(xp > 8000 && xp <= 9000):
    classificacao = " Ascendente"
    break

    case(xp > 9000 && xp <= 10000):
    classificacao = " Imortal"
    break

    case(xp <= 10001):
    classificacao = " Radiante"
    break

}

console.log( "O Herói de nome " + nome + " está no nível " + classificacao);


// Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:


//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
// Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"