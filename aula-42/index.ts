// *****Exercicio 1 - a) Dá erro! b) Eu teria que usar um tipo chamado "any", que 
// permite que a variável assuma qualquer valor.  c)

/*enum COR_FAVORITA {
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
    }

const pessoa1: pessoa = {
    nome: "Antonio",
    idade: 31,
    corFavorita: COR_FAVORITA.AZUL
}

const pessoa2: pessoa = {
    nome: "Joao",
    idade: 25,
    corFavorita: COR_FAVORITA.VERMELHO
}

const pessoa3: pessoa = {
    nome: "Joana",
    idade: 27,
    corFavorita: COR_FAVORITA.VERDE
}

const pessoa4: pessoa = {
    nome: "Fernanda",
    idade: 25,
    corFavorita: COR_FAVORITA.AMARELO
} 

*****EXERCÍCIO 2 - 



function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }
        
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
} 

type amostraDedados = {
    numeros: number[],
    obterEstatisticas: number[] | number 
}

EXERCÍCIO 3



type post = {autor: string, texto: string} - não consegui tipar a parte do []

const posts = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

EXERCÍCIO 4 - NO OUTRO ARQUIVO

*/


