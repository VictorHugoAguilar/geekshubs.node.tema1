console.log("Escribe la nota");
var stdin = process.openStdin();

stdin.addListener("data", (nota) => {
    switch (nota) {
        case 0:
            console.log('insuficiente ');
            break;
        case 1:
            console.log('insuficiente ');
            break;
        case 2:
            console.log('insuficiente ');
            break;
        case 3:
            console.log('insuficiente ');
            break;
        case 4:
            console.log('insuficiente ');
            break;
        case 5:
            console.log('suficiente ');
            break;
        case 6:
            console.log('suficiente ');
            break;
        case 7:
            console.log('notable ');
            break;
        case 8:
            console.log('notable ');
            break;
        case 9:
            console.log('sobresaliente ');
            break;
        case 10:
            console.log('sobresaliente ');
            break;
        default:
            console.log('el valor no esta en el rango especifico de las notas');
            break;
    }

});