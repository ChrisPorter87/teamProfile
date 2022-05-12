const Manager = require("../lib/Manager");
test("employee position", () => {
  const manager = new Manager(
    "Chris Porter",
    2,
    "cap8095@gmail.com",
    5406889244
  );
  expect(manager.getRole()).toEqual("Manager");
});
test("manager phone number", () => {
  const manager = new Manager(
    "Chris Porter",
    2,
    "cap8095@gmail.com",
    5406889244
  );
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
