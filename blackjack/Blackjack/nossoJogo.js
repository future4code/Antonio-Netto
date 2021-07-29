/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de blackjack")

if(confirm("Quer iniciar uma nova rodada?")) {
 let carta1Jogador1 = comprarCarta()
 let carta2Jogador1 = comprarCarta()
 let carta1Jogador2 = comprarCarta()
 let carta2Jogador2 = comprarCarta()

 const pontuacaoJogador1 = carta1Jogador1 + carta2Jogador1
 const pontuacaoJogador2 = carta1Jogador2 + carta2Jogador2

 console.log(`Usuário - cartas: ${carta1Jogador1.texto} ${carta2Jogador1.texto} - ${carta1Jogador1.valor + carta2Jogador1.valor}`)
 console.log(`Computador - cartas: ${carta1Jogador2.texto} ${carta2Jogador2.texto} - ${carta1Jogador2.valor + carta2Jogador2.valor}`) 
 
 if((carta1Jogador1.valor + carta2Jogador1.valor) > (carta1Jogador2.valor + carta2Jogador2.valor)) {
    console.log("O usuário ganhou!") 
 } else if ((carta1Jogador1.valor + carta2Jogador1.valor) < (carta1Jogador2.valor + carta2Jogador2.valor)) {
          console.log("O computador ganhou!") 
  } else {
            console.log("Empate!")
             }
          }
