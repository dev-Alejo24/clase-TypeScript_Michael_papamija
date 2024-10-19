// retornar la funcion
function addOne(a:number, b:number): number {
    return a + b;
}

function greetOne(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}`;
}

function greetTwo(name: string, greeting: string = 'Hello'): any {
    const auxGreet = `${greeting}, ${name}`;

    interface Aux {
        id: number,
        name: string,
    }

    const numberAux : Aux[] = [
        { id: 1, name: 'Juan' },
        { id: 2, name: 'Pedro' },
    ];

    if (numberAux.length) {
        const findNumber: any[] = numberAux.filter((a) => a.id !== null);
        if (findNumber.length > 0) {
            return findNumber;
        } else {
            return auxGreet;
        }
    }

}

// la logica se queda en la funcion void
function printNumbersOne(...numbers: number[]): void {
    console.log(numbers.join(','), 'numbers join');
}

const responseFunction = addOne(5, 10);
console.log(responseFunction, 'responseFinction');
console.log(addOne(5, 10)); // 15
console.log(greetOne('Alice')); // Hello, Alice
printNumbersOne(1, 2, 3, 4); // string 1,2,3,4
console.log(greetTwo('Sofia'));

// connsultar como imprimir greetTwo
