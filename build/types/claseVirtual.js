class Person {
    constructor(id, name, email, statusClass = 'hellow') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.statusClass = statusClass;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
        console.log(this.id, 'id');
        console.log(this.statusClass, 'statusClass');
    }
}
class Employee extends Person {
    constructor(id, name, email, statusClass, position) {
        super(id, name, email, statusClass);
        this.position = position;
    }
    work() {
        console.log(`${this.name} as a ${this.position}`);
        console.log(this.email);
    }
}
const employee = new Employee(1, 'Bob', 'Bob@example.com', '', 'Developer');
console.log('clases');
console.log(employee, 'empoyee');
console.log(employee.name, 'name');
employee.greet();
//# sourceMappingURL=claseVirtual.js.map