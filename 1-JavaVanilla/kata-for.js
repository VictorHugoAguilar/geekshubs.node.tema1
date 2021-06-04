console.log("Escribe la nota");
var stdin = process.openStdin();

stdin.addListener("data", (nota) => {

    if (isNaN(nota.toString())) {
        console.log('no es numero');
        return;
    }
    var numero = parseInt(nota.toString());
    for (var i = 1; i <= 10; i++) {
        const result = i * numero;
        console.log(i + ' * ' + numero + ' = ' + result);
    }
});