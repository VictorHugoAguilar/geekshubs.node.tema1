Main();

function Main() {
    console.debug('Entrando en la calculadora');

    const recuperarOperador = getOperador();
    console.debug('recuperarOperador', recuperarOperador);

    const recuperarValor_a = getNumero();
    console.debug('recuperarValor_a', recuperarValor_a);

    const recuperarValor_b = getNumero();
    console.debug('recuperarValor_b', recuperarValor_b);


    if (isNaN(recuperarValor_a) || isNaN(recuperarValor_b)) {
        console.error('No Son numeros');
        return;
    }

    const resultadoDeOperar = operar(recuperarOperador, recuperarValor_a, recuperarValor_b);

    const result = `El resultado de ${recuperarValor_a} ${recuperarOperador} ${recuperarValor_b} es ${resultadoDeOperar}`;

    alert(result);
}

function operar(operador, valor_a, valor_b) {

    switch (operador) {
        case "+":
            console.debug('Sumando');
            const suma = parseInt(valor_a) + parseInt(valor_b);
            return suma;
            break;
        case "-":
            console.debug('Restando');
            const resta = parseInt(valor_a) - parseInt(valor_b);
            return resta;
            break;
        case "*":
            console.debug('Mutiplicando');
            const multiplicacion = parseInt(valor_a) * parseInt(valor_b);
            return multiplicacion;
            break;
        case "/":
            console.debug('Dividiendo');
            const dividir = parseInt(valor_a) / parseInt(valor_b);
            return dividir;
            break;
    }
}


function getOperador() {
    console.debug('Ingrese el operador...');
    let valor = prompt('Ingrese el operador');
    return valor;
}

function getNumero() {
    console.debug('Ingrese el valor...');
    let valor = prompt('Ingrese el valor');
    return valor;
}