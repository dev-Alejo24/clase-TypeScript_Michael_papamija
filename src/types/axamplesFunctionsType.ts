const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1.1
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(15);
auxNumber.push(17);
console.log(auxNumber);

// 1.2
auxNumber.pop(); // crear const
console.log(auxNumber);

// 1.3
const indexNumberOne = auxNumber.indexOf(1);
console.log(indexNumberOne, 'indexNumberOne');

const indexNumberFour = auxNumber.indexOf(4);
console.log(indexNumberFour, 'indexNumberFour');

const indexNumberSeven = auxNumber.indexOf(7);
console.log(indexNumberSeven, 'indexNumberSeven');

// 1.4
const sliceAuxNumber = auxNumber.slice(2, 9);
console.log(sliceAuxNumber, 'sliceAuxNumber');

// 1.5
// every
const allGreaterOne = auxNumber.every((num) => num > 1);
console.log(allGreaterOne, 'allGreaterOne');

// some
const anyGreaterOrEqualSeven = auxNumber.some((num) => num >= 7);
console.log(anyGreaterOrEqualSeven, 'anyGreaterOrEqualSeven');

// 2
const auxString: string[] = ['1', '2', '3', '4', '5', '6', '7'];
// 2.1
auxString.push('10');
auxString.push('11');
auxString.push('12');
auxString.push('13');
auxString.push('14');
console.log(auxString, 'auxString push');

// 2.2
const indexStringTen = auxString.indexOf('10');
console.log(indexStringTen, 'indexStringTen');

const indexStringEleven = auxString.indexOf('11');
console.log(indexStringEleven, 'indexStringEleven');

const indexStringFourteen = auxString.indexOf('14');
console.log(indexStringFourteen, 'indexStringFourteen');

// 3
const message: string = 'Bienbenidos al Itp';
// 3.1
const splitMessage : string[] = message.split(' ');
console.log(splitMessage, 'splitMessage');

// 3.2
const joinMessage = splitMessage.join(',');
console.log(joinMessage, 'joinMessage');

// 4
const namess: string = 'michael,anderson,yadir,Kevin,Emerson';
// 4.1
const splitNamess: string[] = namess.split(',');
console.log(splitNamess, 'splitNamess');
// 4.2
const joinNamess = splitNamess.join(' ');
console.log(joinNamess, 'joinNamess');

// 5
const anyProducts: any[] = [
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
    },

];
// 5.1
const filterPrice = anyProducts.filter((p) => p.price > 900);
console.log(filterPrice, 'filterPrice');

// 5.2
const filterProducts = [];
for (let i = 0; i < anyProducts.length; i++) {
  if (anyProducts[i].price > 900) {
    filterProducts.push(anyProducts[i]);
  }
}
console.log(filterProducts, 'filterProducts');

// 5.3
const foundPrice: number | undefined = anyProducts.find((price) => price.price > 500);
console.log(foundPrice, 'foundPrice');

// 5.4
const foundPriceIndex: number | undefined = anyProducts.findIndex((price) => price.price > 1000);
console.log(foundPriceIndex, 'foundPriceIndex');
// 5.5
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

// 6
const array01: number[] = [1, 2, 3, 4];
const array02: number[] = [6, 7, 8, 9];

// 6.1
const concatArray = array01.concat(array02);
console.log(concatArray, 'concatArray');

for (let i = 0; i < array02.length; i++) {
  array01.push(array02[i]);
}

console.log(array01, 'array01 push array02');

// 6.2
const sortedArrays: number[] = concatArray.sort((a, b) => a - b);
console.log(sortedArrays, 'sortedArrays');

// 6.3
const reversArrays: number[] = sortedArrays.reverse();
console.log(reversArrays, 'reversArrays');
