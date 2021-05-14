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

   novaRodadaUsuario = (carta1, carta2) => {
      return carta1
   }


  let carta1 = comprarCarta()
  let carta2 = comprarCarta()
  let carta3 = comprarCarta()
  let carta4 = comprarCarta()
    
    console.log("Bem vindo ao jogo de Blackjack!")
 
    if(confirm("Quer iniciar uma nova rodada?" ) === true) {

      console.log(`Usuário - cartas:", ${carta1}, "- pontuação", ${carta1.valor}`)

   } else {
      console.log("O jogo acabou")
   }

  
   console.log(carta)