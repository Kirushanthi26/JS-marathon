//Q18 - classes

//Design a class for employee which takes id and name in during construction of object and has a salary property
class Employee{
   constructor(id, name){
        if (!id || !name) {
            throw new Error("Employee ID and Name are mandatory")
        }

        this.id = id 
        this.name = name
   }

   setSalary(salary) {
        this.salary = salary
   }

   getSalary(){
        return this.salary
   }

   getName() {
        return this.name
   }

   getId() {
        return this.id
   }
}

//Design a class for manager which is employee and can have a department property.

class Manager extends Employee{
    setDepartment(name){
        this.department = name
    }

    getDepartment(){
        return this.department
    } 
}

const employee = new Employee(1, 'Jack') 
employee.setSalary(1000)
employee
console.log(employee.getName())

const manager = new Manager(2, 'Jacks') 
manager.setSalary(1000) 
manager
manager.setDepartment('Development') 
console.log(manager.getDepartment())



//--------------------------------------------------------------------------------------

// Design the same classes as in previous question but by using only JavaScript prototypes and not class keyword.

/**
 * 
    Blueprint → House
    Class → Employee
    Object → employee1, employee2
    constructor -> Every Employee must have an id and a name
    
    extends means: Manager is also an Employee
    Manager has id, name, salary PLUS department

    A constructor is a special function that runs automatically when you create an object using new. It sets initial values. Initialize data (very important)

    We did not put salary in the constructor because: Salary is not required at the time the employee is created. id and name are required.

    Constructor should only take data that is mandatory for the object to exist
    ex: Constructor = minimum required data
    Salary ❌ not mandatory at creation

    Optional vs Required (important concept)
        Required → constructor -> id, name

    Optional / Changeable → methods
        salary, department, bonus, address

    This is clean design.

    Constructor should only contain mandatory fields needed to create a valid object. Salary is optional and changeable, so it is set using a method instead of the constructor.

 */