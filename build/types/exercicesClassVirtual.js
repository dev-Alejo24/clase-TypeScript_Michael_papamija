class Frameworks {
    constructor(creador, lenguage, anoLenguage, active, nameFrameworks) {
        this.creadorLenguage = creador;
        this.lenguage = lenguage;
        this.anoLenguage = anoLenguage;
        this.active = active;
        this.nameFrameworks = nameFrameworks;
    }
    showData() {
        console.log(this.creadorLenguage);
        console.log(this.lenguage);
        console.log(this.anoLenguage);
        console.log(this.active);
        console.log(this.nameFrameworks);
    }
}
const framework01 = new Frameworks('Brendan Eich', 'JavaScript', 1995, true, ['React', 'Express', 'NextJS']);
console.log(framework01, 'framework');
function calcularArea(base, altura) {
    return base * altura;
}
console.log(calcularArea(4, 5), ' :calcularArea');
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    showCar() {
        console.log(`make: ${this.make}`);
        console.log(`model: ${this.model}`);
    }
}
const car0 = new Car('Toyota', 'Camry');
car0.showCar();
class Rectangle {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
const rectangle = new Rectangle(3, 2);
console.log(rectangle.area(), ' :areaRectangle');
const libros = [
    { tittle: 'Harry Potter', author: 'J.K. Rowling' },
    { tittle: 'Cien años de soledad', author: 'Gabriel Garcia Marquez' },
    { tittle: 'La Odisea', author: 'Homero' },
    { tittle: 'La Hojarasca', author: 'Gabriel Garcia Marquez' },
];
console.log(libros);
const filterLibro = libros.filter((l) => l.author === 'Gabriel Garcia Marquez');
console.log(filterLibro, ' filterLibro');
class Library {
    constructor() {
        this.libros = [];
    }
    addBook(book) {
        this.libros.push(book);
    }
    searchBook(author) {
        return this.libros.filter((b) => b.author === author);
    }
}
const myLibrary = new Library();
myLibrary.addBook({ title: 'Harry Potter', author: 'J.K. Rowling', year: 2000 });
console.log(myLibrary, ' :miLibrary');
const author01 = myLibrary.searchBook('J.K. Rowling');
console.log(author01, ' :author01');
let auxSum = 0;
for (let i = 0; i <= 100; i++) {
    auxSum += i;
}
console.log(auxSum, ' :auxSum');
let countImpar = 0;
let count = 0;
while (count < 30) {
    if (count % 2 !== 0) {
        countImpar++;
    }
    count++;
}
console.log(count, ' :count');
console.log(countImpar, ' :countImpar');
for (let i = 2; i <= 30; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(i, ' :numeroPrimo');
    }
}
//# sourceMappingURL=exercicesClassVirtual.js.map