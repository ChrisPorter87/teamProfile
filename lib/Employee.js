class Employee {
  constructor(teammemberName, id, email) {
    this.teammemberName = teammemberName;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.getteammemberName;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "employee";
  }
}
module.exports = Employee;
