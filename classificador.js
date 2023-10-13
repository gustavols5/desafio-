// Classificador de nível de Herói

let input = prompt("Digite a xp");
let xp = parseInt(input);
let nome = "Super Felipe";
let classificacao = "";

if (xp < 1000) {
    classificacao = "Ferro";
} else if (xp > 1000 && xp <= 2000) {
    classificacao = "Bronze";
} else if (xp > 2000 && xp <= 5000) {
    classificacao = "Prata";
} else if (xp > 6000 && xp <= 7000) {
    classificacao = "Ouro";
} else if (xp > 7000 && xp <= 8000) {
    classificacao = "Platina";
} else if (xp > 8000 && xp <= 9000) {
    classificacao = "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
    classificacao = "Imortal";
} else {
    classificacao = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível " + classificacao);

// Essa foi a primeira tentativa, mas depois de alguns testes ele nao estava imprimindo a classificaçao.
// Como eram varias variaveis pensei direto no swit-case.
// Entao depois de uma pesquisa vi que o swit-case nao era recomendado para expressoes booleanas.
// Entao mudei para esse tanto ai de else e if





// let input = prompt("Digite a xp")
// let xp = parseInt(input);
// let nome = "Super Felipe"
// let classificacao = " "

// switch(xp){
//    case(xp < 1000):
//  classificacao = " Ferro"
//   break

//    case(xp > 1000 && xp <= 2000):
//    classificacao = " Bronze"
//   break

//    case(xp > 2000 && xp <= 5000):
//    classificacao = " Prata"
//    break
    
//    case(xp > 6000 && xp <= 7000):
//    classificacao = " Ouro"
//    break
//
//   case(xp > 7000 && xp <= 8000):
//    classificacao = " Platina"
//  break

//    case(xp > 8000 && xp <= 9000):
//   classificacao = " Ascendente"
//    break

//    case(xp > 9000 && xp <= 10000):
//    classificacao = " Imortal"
//   break

//    case(xp <= 10001):
//   classificacao = " Radiante"
//    brea

//}

//console.log( "O Herói de nome " + nome + " está no nível " + classificacao);

