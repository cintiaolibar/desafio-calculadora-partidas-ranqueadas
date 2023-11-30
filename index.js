validacao();

function validacao() {
let vitorias = 110;
let derrotas = 13;
let nivelDoJogador;

vitorias = subtracao(vitorias, derrotas);

function subtracao(vitorias , derrota) {
return vitorias - derrota;

}

if (vitorias <= 10){
   nivelDoJogador = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20){
    nivelDoJogador = "Bronze";

} else if (vitorias >= 21 && vitorias <= 50){
    nivelDoJogador = "Prata";

} else if (vitorias >= 51 && vitorias <= 80){
    nivelDoJogador = "Ouro";

} else if (vitorias >= 81 && vitorias <= 90){
    nivelDoJogador = "Diamante";

} else if (vitorias >= 91 && vitorias <= 100){
    nivelDoJogador = "Lendário";

} else if (vitorias >= 101){
    nivelDoJogador = "Imortal";
}

console.log("O Herói tem um saldo de " + vitorias + " e está no nível " + nivelDoJogador)
}