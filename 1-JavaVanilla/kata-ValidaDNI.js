Main();

function Main() {
    console.debug('Inicializando validador');

    const dniToValidate = prompt('Ingrese el dni a validar');
    console.debug('dniToValidate', dniToValidate);

    const valid = validDni(dniToValidate) ? ' es valido' : ' no es valido';

    alert(`Dni: ${dniToValidate} ${valid}`);
}

function validDni(dniToValidate) {

    const letterForValidate = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    const numberDni = dniToValidate.substring(0, 8);
    console.debug('numberDni', numberDni);

    const letterDni = dniToValidate.substring(8);
    console.debug('letterDni', letterDni);

    if (isNaN(numberDni)) {
        console.error('no es un numero');
        return false;
    }

    const position = numberDni % 23;
    console.debug('position', position);

    const letterInArray = letterForValidate[position];
    console.debug('leterInArray', letterInArray);

    return letterInArray == letterDni.toUpperCase();
}