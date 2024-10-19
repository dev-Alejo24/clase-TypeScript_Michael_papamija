// class
class Person {
  private id: number;

  public name: string;

  protected email: string;

  private statusClass: string;

  constructor(id:number, name: string, email: string, statusClass:string = 'hellow') {
    this.id = id;
    this.name = name;
    this.email = email;
    this.statusClass = statusClass;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
    console.log(this.id, 'id');
    console.log(this.statusClass, 'statusClass');
  }
}

// Herencia
class Employee extends Person {
    public position: string;

    constructor(id: number, name:string, email:string, statusClass:string, position:string) {
        // se agregan en el orden que vienen de la clase principal
        super(id, name, email, statusClass);
        this.position = position;
    }

    public work(): void {
        console.log(`${this.name} as a ${this.position}`);
        // email es protegida y solo accede a las heredadas de la principal
        console.log(this.email);
    }
}

// se agregan en el orden que vienen de la clase principal
const employee: Employee = new Employee(1, 'Bob', 'Bob@example.com', '', 'Developer');
console.log('clases');
console.log(employee, 'empoyee');
console.log(employee.name, 'name');
// accedo al metodo greet()
employee.greet();
