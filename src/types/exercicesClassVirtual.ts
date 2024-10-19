// 1. 1. Declara variables utilizando todos los tipos primitivos mencionados
// crear arrays, objetos, funciones para repasar

class Frameworks{
    private creadorLenguage : string;
    protected lenguage : string;
    private anoLenguage: number;
    private active: boolean;
    public nameFrameworks: any;

    constructor(creador: string, lenguage: string, anoLenguage: number, active: boolean, nameFrameworks: any) {
        this.creadorLenguage = creador;
        this.lenguage = lenguage;
        this.anoLenguage = anoLenguage;
        this.active = active;
        this.nameFrameworks = nameFrameworks;
    }

    public showData(){
        console.log(this.creadorLenguage);
        console.log(this.lenguage);
        console.log(this.anoLenguage);
        console.log(this.active);
        console.log(this.nameFrameworks);
    }

}
const framework01 = new Frameworks('Brendan Eich', 'JavaScript', 1995, true, ['React', 'Express', 'NextJS']);
console.log(framework01, 'framework');

// 2. Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros
function calcularArea(base : number,altura : number){
    return base * altura;
}
console.log(calcularArea(4,5), ' :calcularArea')

// 3. Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información
class Car {
    private make: string;
    private model: string;

    constructor(make: string, model: string){
        this.make = make;
        this.model = model;
    }
    
    public showCar(): void {
        console.log(`make: ${this.make}`);
        console.log(`model: ${this.model}`);
    }
}
const car0 = new Car('Toyota', 'Camry');
car0.showCar();

// Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz
interface Shape{
    area(): number;
}
class Rectangle implements Shape{
    private base: number;
    private altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    area(){
        return this.base * this.altura;
    }
}
const rectangle = new Rectangle(3,2);
console.log(rectangle.area(), ' :areaRectangle')

// 5. Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author, y usa filter para obtener solo los libros de un autor específico.
interface Libro{
    tittle : string;
    author : string;
}

const libros : Libro[] = [
    { tittle: 'Harry Potter', author: 'J.K. Rowling' },
    { tittle: 'Cien años de soledad', author: 'Gabriel Garcia Marquez' },
    { tittle: 'La Odisea', author: 'Homero' },
    { tittle: 'La Hojarasca', author: 'Gabriel Garcia Marquez'},
]

// imprime los libros del array de objetos
console.log(libros);

// filter libros
const filterLibro = libros.filter((l) => l.author === 'Gabriel Garcia Marquez')
console.log(filterLibro, ' filterLibro')
// console.log(libros[1]); // pos 1 --> 100 años de soledad


/*
6. Crea un pequeño programa que utilice todos los conceptos anteriores:
	Define una interfaz Book que tenga title, author, y year.
	Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.
	Usa métodos de clase y arreglos para interactuar con la biblioteca.
 */

interface Book{
    title : string;
    author : string;
    year : number;
}

class Library{
    private libros : Book[];
    constructor(){
        this.libros = [];
    }

    // recibe interface Book
    public addBook(book : Book){ 
        this.libros.push(book); //agg el libro al array libros[] por push
    }

    // recibe el autor enviado al parametro y lo compara con el de libros[]
    public searchBook(author : string): Book[] {
        return this.libros.filter((b) => b.author === author);
    }
}

// llamo la clase por la constante y luego agrego los obj con las definiciones de la interface Book 
const myLibrary = new Library();
myLibrary.addBook({title: 'Harry Potter', author: 'J.K. Rowling', year:2000}); //agrega los libros deseados
console.log(myLibrary, ' :miLibrary')

const author01 = myLibrary.searchBook('J.K. Rowling'); //busca el libro segun el autor ingresado
console.log(author01, ' :author01')

/*
 * 8. Uso de ciclos
		1. Escribe un programa que sume todos los números pares del 1 al 100
		2. Contar números impares con while, que hay entre 1 y 30.
		3. Imprimir números primos con for y if 
*/
// 8.1
let auxSum = 0;
for(let i = 0; i <= 100; i++){
    auxSum += i;
}
console.log(auxSum, ' :auxSum');

// 8.2
let countImpar = 0;
let count = 0;
while(count < 30){
    if(count %2 !== 0){ // el mod diferente de 0
        countImpar++;
    }
    count++;
}
console.log(count, ' :count');
console.log(countImpar, ' :countImpar');

// 8.3
// inicia en 2 ya que 1 y 0 no son primos
for(let i = 2; i <= 30; i++){
    let esPrimo = true;
    for(let j = 2; j < i; j++){ // verifica divisores 
        if(i % j === 0){
            esPrimo = false; //no es primo
            break; // salga del ciclo interno
        }
    }
    if(esPrimo){
        console.log(i, ' :numeroPrimo')
    }
}