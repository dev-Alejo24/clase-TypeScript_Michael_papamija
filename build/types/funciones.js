function addOne(a, b) {
    return a + b;
}
function greetOne(name, greeting = 'Hello') {
    return `${greeting}, ${name}`;
}
function greetTwo(name, greeting = 'Hello') {
    const auxGreet = `${greeting}, ${name}`;
    const numberAux = [
        { id: 1, name: 'Juan' },
        { id: 2, name: 'Pedro' },
    ];
    if (numberAux.length) {
        const findNumber = numberAux.filter((a) => a.id !== null);
        if (findNumber.length > 0) {
            return findNumber;
        }
        else {
            return auxGreet;
        }
    }
}
function printNumbersOne(...numbers) {
    console.log(numbers.join(','), 'numbers join');
}
const responseFunction = addOne(5, 10);
console.log(responseFunction, 'responseFinction');
console.log(addOne(5, 10));
console.log(greetOne('Alice'));
printNumbersOne(1, 2, 3, 4);
console.log(greetTwo('Sofia'));
//# sourceMappingURL=funciones.js.map