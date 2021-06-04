console.log("Escribe la nota");
var stdin = process.openStdin();


stdin.addListener("data", (nota) => {
    if (nota > 0 && nota <= 4) {
        console.log('insuficiente ')
    } else if (nota > 4 && nota <= 6) {
        console.log('suficiente')
    } else if (nota > 6 && nota <= 8) {
        console.log('notable')
    } else if (nota > 8 && nota <= 10) {
        console.log('sobresaliente')
    } else {
        console.log('el valor no esta en el rango especifico de las notas')
    }
});