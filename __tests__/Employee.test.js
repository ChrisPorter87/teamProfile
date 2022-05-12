const Employee = require("../lib/Employee");

test(" the employee object", () => {
  const employee = new Employee("Chris Porter", 2, "cap8095@gmail.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
test("employee id", () => {
  const employee = new Employee("Chris Porter", 2, "cap8095@gmail.com");
  expect(employee.getId()).toEqual(expect.any(Number));
});
test("employee name", () => {
  const employee = new Employee("Chris Porter", 2, "cap8095@gmail.com");
  expect(employee.getName()).toEqual(expect.any(String));
});
test("employee email", () => {
  const employee = new Employee("Chris Porter", 2, "cap8095@gmail.com");
  expect(employee.getEmail()).toEqual(expect.any(String));
});
test("employee role", () => {
  const employee = new Employee("Chris Porter", 2, "cap8095@gmail.com");
  expect(employee.getRole()).toEqual("employee");
});
