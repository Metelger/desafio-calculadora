addValue = (event) => {
    let buttonValue = event.target.value
    let calcDisplay = document.getElementById('calcDisplay')
    let verificacaoAdicao, verificacaoSubtracao, verificacaoMultiplicacao, verificacaoDivisao
    handleVerify = (stringVerify) => {
        verificacaoAdicao = /\+$/.test(stringVerify.value)
        verificacaoSubtracao = /\-$/.test(stringVerify.value)
        verificacaoDivisao = /\/$/.test(stringVerify.value)
        verificacaoMultiplicacao = /\x$/.test(stringVerify.value)
        !verificacaoAdicao && !verificacaoSubtracao && !verificacaoDivisao && !verificacaoMultiplicacao ? stringVerify.value += buttonValue : ''
    }
    
    switch (buttonValue) {
        case "Limpar":
            calcDisplay.value = ''
            break;
        case "1":
            calcDisplay.value += buttonValue
            break;
        case "2":
            calcDisplay.value += buttonValue
            break
        case "3":
            calcDisplay.value += buttonValue
            break;
        case "4":
            calcDisplay.value += buttonValue
            break;
        case "5":
            calcDisplay.value += buttonValue
            break
        case "6":
            calcDisplay.value += buttonValue
            break;
        case "7":
            calcDisplay.value += buttonValue
            break;
        case "8":
            calcDisplay.value += buttonValue
            break
        case "9":
            calcDisplay.value += buttonValue
            break;
        case "+":
            handleVerify(calcDisplay)
            break;
        case "-":
            handleVerify(calcDisplay)
            break
        case "/":
            handleVerify(calcDisplay)
            break;
        case "x":
            handleVerify(calcDisplay)
            break;
        case "=":
            let regExTrocaOperador = /x/g;
            let fomataResultado = calcDisplay.value.replace(regExTrocaOperador, '*');
            let expressaoRegular = /(\d+(\.\d+)?)(\s*[\+\-\*\/]\s*)?/g;

            // Extrai os números e operadores da string e coloca em uma matriz na ordem correta
            let partes = fomataResultado.match(expressaoRegular);
            let matriz = [];

            partes.forEach((parte) => {
            if (parte.match(/[\+\-\*\/]/)) {
                matriz.push(parte.trim());
            } else {
                matriz.push(parseFloat(parte));
            }
            });

            // Usa a função eval() para avaliar a matriz e obter o resultado
            let resultado = eval(matriz.join(''));
            calcDisplay.value = resultado.toFixed(2)
            break;
        case ".":
            calcDisplay.value += buttonValue
            break
        case "0":
            calcDisplay.value += buttonValue
            break;
        default:
            ''
    }
}