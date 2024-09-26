const number: Array<number> = [1,2,3];

//Array de tuplas
/* const mixed: [number, string] = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
] */

const numberOne: number[] = [1,2,3,4,5];
const stringOne: string[] = ['1','2','3','4','5'];
numberOne.push(6); //añade en la ultima posision
console.log(numberOne);
numberOne.pop(); //elimina el ultimo elemento '6'

// encontrar el indice de un elemento dentro del Arry
const indexNumber = numberOne.indexOf(3); //2
console.log(numberOne, 'numberone')

const indexString = stringOne.indexOf('1'); //2
console.log(indexString, 'indexString');

// extraer parte del Array
const sliceNumber = numberOne.slice(1,4); // [2,3,4]

// mao para transformar los elementos 
const square = numberOne.map((item) => item * 2); // [2,]

//filter
