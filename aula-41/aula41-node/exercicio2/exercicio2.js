const operacaoMatematica1 = "soma"
const operacaoMatematica2 = "subt"
const operacaoMatematica3 = "div"
const operacaoMatematica4 = "mult"
const numero1 = Number(process.argv[2])
const numero2 = Number(process.argv[3])

let operacao = operacaoMatematica3

switch(operacao){
	case "soma":
		console.log(`${numero1 + numero2}`)
		break;
	case "subt":
		console.log(`${numero1 - numero2}`)
		break;
    case "div":
        console.log(`${numero1 / numero2}`)
        break;
    case "mult":
        console.log(`${numero1 * numero2}`)
        break;
    default: 
       console.log(`erro`)
       break
}

