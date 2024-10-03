const numbers = [1, 2, 3, 4, 5];
const numberOne = [1, 2, 3, 4, 5];
const stringOne = ['1', '2', '3', '4', '5'];
numberOne.push(6);
console.log(numberOne);
numberOne.pop();
const indexNumber = numberOne.indexOf(3);
console.log(numberOne, 'numberone');
const indexString = stringOne.indexOf('1');
console.log(indexString, 'indexString');
const sliceNumber = numberOne.slice(1, 4);
const square = numbers.map((item) => item * 2);
const evenNumber = numbers.filter((num) => num % 2 === 0);
const coin = [
    {
        id: 1,
        name: 'pesos',
        code: 'COP'
    },
    {
        id: 2,
        name: 'dolar',
        code: 'USD'
    },
    {
        id: 3,
        name: 'ecua',
        code: 'USD'
    }
];
const coinFilter = coin.filter((coinn) => coinn.code === 'USD');
console.log(coinFilter, 'coinFiltter');
const sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
const sentence = 'Hello world TypeScript is great';
const word = sentence.split(' ');
console.log(word, 'Split');
const joinSentences = word.join('');
const numberArrayCoins = [1, 2, 3];
const joinNumberArrayCoins = numberArrayCoins.join('_');
console.log(joinNumberArrayCoins);
const numbersTwo = [10, 20, 30, 40];
const foundNumber = numbersTwo.find((num) => num > 25);
console.log(foundNumber, 'foundNumber');
const foundIndex = numbersTwo.findIndex((num) => num > 25);
console.log(foundIndex, 'foundIndex');
const allPositive = numbersTwo.every((num) => num > 0);
console.log(allPositive, 'allPositive');
const someNumbers = numbersTwo.every((num) => num > 0);
console.log(someNumbers, 'allPositive');
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray, 'concatArray');
const unsurtedNumbers = [5, 1, 2, 4, 3];
const sortedNumbers = unsurtedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers, 'sortedNumbers');
const names = ['Carlie', 'Alice', 'Bob'];
const sortedNames = names.sort();
console.log(sortedNames, 'sortedNames');
const reverseNumbers = sortedNumbers.reverse();
console.log(reverseNumbers, 'reverseNumbers');
const auxNumbersArray = [1, 2, 3, 4, 5, 6, 9, 2, 1];
let aut = [];
for (let i = 0; i < auxNumbersArray.length; i++) {
    if (!aut.includes((auxNumbersArray[i]))) {
        aut.push(auxNumbersArray[i]);
    }
    else {
        console.log('El numero ya existe');
    }
}
console.log(aut, 'aut');
const hasFour = numbersTwo.includes(4);
console.log(hasFour, 'hasFour');
//# sourceMappingURL=exampleTypeArrays.js.map