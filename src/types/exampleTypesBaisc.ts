// crear una variable de tipo numero, tipo stribg, bool y any, acada una de ellas vamos a imprimir un console de la variable
// agrega razas de perros
const breedDog: string = 'Raza';
// eslint-disable-next-line no-console
console.log(breedDog, 'Breed01');
// alias de la raza del perro

// Usuario de un estudiante
const userStudent: unknown = 'StudentItp';
console.log(userStudent, 'fdhst');

// numero de estudiantes
const studentCount: number = 25;
console.log('Student Count:', studentCount);

// nombre del estudiante
const studentName: string = 'Michael';
console.log('student name: ', studentName);

// si el estudiante esta inscrito
let isEnrolled: boolean;
console.log(isEnrolled, true);

/* con 'any' se puede asociar cualquier tipo de dato
let actionsOne: any;
actionsOne = 'Hellow World';
actionsOne = [
    {
        name: 'Isa'
    },
    {
        name: 'Carlos'
    }

] */

const coins : any[] = [
  {
    id: 1,
    name: 'Dolar',
    code: '$',
  },
];

coins.push({
  id: 1,
  name: 'Euro',
  code: '%',
});
console.log(coins);

// TUPLAS: array especial con numero fijo de elementos y posisiones definidass
const dateOne: [string, number] = ['cadena', 1];
console.log(dateOne);

// ennum:  constante, facil de mantener y no quemar codigo
enum Color {Rojo, Verde, Azul}
let c: Color = Color.Verde; // imprime la posicion
console.log(Color[1]); //imprime verde

enum Day {Lunes = 1, Martes = 2, Miercoles = 3};
let day: Day = Day.Miercoles;
console.log(day, 'dia');

enum Week {
    id = 1, 
    tipo = 2, 
    product = 3
};
let week: Week = Week.product;
console.log(week, 'dia');

// void
function saludar(): void {
    const aux: any =[1 ,2,3,4];
    let sum = 0;
    for(let i = 1; i < aux.length; i++){
        sum += aux[1]
    }
    console.log('Hola');
};

function llegada(): boolean{
    const name:boolean = true;
    return name;
};

// objetos --> deteO
// tipa los campos y datos del objeto
let car: {make: string, model: string, year: number} = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
 // sin ttipado se quita la primer llave
const animals:{name:string, age: number, status:boolean} = {
    name: 'rex',
    age: 2020,
    status: false
};



// null y undefined
let nothing : any = null; //valor por defecto que se puede cambiar
nothing = 'Hello';

let notDefined : undefined = undefined;

// Uniones: varios tipos, similar al 'any'
let value: number | string | boolean = false;
value = 1;