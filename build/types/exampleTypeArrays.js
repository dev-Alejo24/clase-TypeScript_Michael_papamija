const number = [1, 2, 3];
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
const square = numberOne.map((item) => item * 2);
//# sourceMappingURL=exampleTypeArrays.js.map