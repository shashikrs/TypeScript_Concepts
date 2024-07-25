class Department {
  // private name: string;
  protected employees: string[] = [];
  static x: string;

  constructor(protected readonly id: string, public readonly name: string) {
    // this name as paramter is enough instead of declaring at the beginning and also initializing below
    // this.name = n;
  }

  describe(this: Department) {
    console.log("Department name is:" + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  static getDate() {
    // static methods are basically utility methods
    return new Date();
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  private deskOwner: string;

  constructor(id: string, public admins: string[]) {
    super(id, "IT"); //calls the constructor of base class
    this.deskOwner = admins[0];
  }

  addEmployee(employee: string): void {
    if (this.name === "Max") {
      return;
    }

    this.employees.push(employee);
    this.deskOwner = employee;
  }

  // getter method to access specific information made avialable outside class without showing the implementation
  get assignedDeskOwner() {
    if (this.deskOwner) {
      return this.deskOwner;
    }
    throw new Error("No owner found");
  }

  // setter method to access specific information made avialable outside class without showing the implementation
  set assignedDeskOwner(value: string) {
    console.log(value);
    this.addEmployee(value);
  }
}

const dept = new Department("1", "Accounting");
const itDept = new ITDepartment("1", ["Mr.X", "Ms.Y"]);

dept.addEmployee("Max");
dept.addEmployee("Xam");
itDept.addEmployee("Axm");

dept.printEmployeeInfo();

console.log(itDept);
//console.log(itDept.assignedDeskOwner);

itDept.assignedDeskOwner = "Ram";
itDept.addEmployee("test");

console.log(itDept.assignedDeskOwner);
console.log(Department.getDate());
