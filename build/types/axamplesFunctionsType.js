const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(15);
auxNumber.push(17);
console.log(auxNumber);
auxNumber.pop();
console.log(auxNumber);
const indexNumberOne = auxNumber.indexOf(1);
console.log(indexNumberOne, 'indexNumberOne');
const indexNumberFour = auxNumber.indexOf(4);
console.log(indexNumberFour, 'indexNumberFour');
const indexNumberSeven = auxNumber.indexOf(7);
console.log(indexNumberSeven, 'indexNumberSeven');
const sliceAuxNumber = auxNumber.slice(2, 9);
console.log(sliceAuxNumber, 'sliceAuxNumber');
const allGreaterOne = auxNumber.every(num => num > 1);
console.log(allGreaterOne, 'allGreaterOne');
const anyGreaterOrEqualSeven = auxNumber.some(num => num >= 7);
console.log(anyGreaterOrEqualSeven, 'anyGreaterOrEqualSeven');
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
auxString.push('10');
auxString.push('11');
auxString.push('12');
auxString.push('13');
auxString.push('14');
console.log(auxString, 'auxString push');
const indexStringTen = auxString.indexOf('10');
console.log(indexStringTen, 'indexStringTen');
const indexStringEleven = auxString.indexOf('11');
console.log(indexStringEleven, 'indexStringEleven');
const indexStringFourteen = auxString.indexOf('14');
console.log(indexStringFourteen, 'indexStringFourteen');
const message = 'Bienbenidos al Itp';
const splitMessage = message.split(' ');
console.log(splitMessage, 'splitMessage');
const joinMessage = splitMessage.join(',');
console.log(joinMessage, 'joinMessage');
const namess = 'michael,anderson,yadir,Kevin,Emerson';
const splitNamess = namess.split(',');
console.log(splitNamess, 'splitNamess');
const joinNamess = splitNamess.join(' ');
console.log(joinNamess, 'joinNamess');
const anyProducts = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscont: 700,
    },
    {
        id: 2,
        name: 'atun',
        price: 2500,
        priceDiscont: 1500,
    }
];
const filterPrice = anyProducts.filter((p) => p.price > 900);
console.log(filterPrice, 'filterPrice');
const filterProducts = [];
for (let i = 0; i < anyProducts.length; i++) {
    if (anyProducts[i].price > 900) {
        filterProducts.push(anyProducts[i]);
    }
}
;
console.log(filterProducts, 'filterProducts');
const foundPrice = anyProducts.find((price) => price.price > 500);
console.log(foundPrice, 'foundPrice');
const foundPriceIndex = anyProducts.findIndex((price) => price.price > 1000);
console.log(foundPriceIndex, 'foundPriceIndex');
anyProducts.push({
    id: 3,
    name: 'eggs',
    price: 600,
    priceDiscont: 400,
});
anyProducts.push({
    id: 4,
    name: 'pan',
    price: 500,
    priceDiscont: 350,
});
anyProducts.push({
    id: 5,
    name: 'azucar',
    price: 5000,
    priceDiscont: 4250,
});
console.log(anyProducts, 'anyProducts push');
const array01 = [1, 2, 3, 4];
const array02 = [6, 7, 8, 9];
const concatArray = array01.concat(array02);
console.log(concatArray, 'concatArray');
for (let i = 0; i < array02.length; i++) {
    array01.push(array02[i]);
}
;
console.log(array01, 'array01 push array02');
const sortedArrays = concatArray.sort((a, b) => a - b);
console.log(sortedArrays, 'sortedArrays');
const reversArrays = sortedArrays.reverse();
console.log(reversArrays, 'reversArrays');
//# sourceMappingURL=axamplesFunctionsType.js.map