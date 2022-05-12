const Intern = require("../lib/Intern");
test("employee position", () => {
  const intern = new Intern(
    "Chris Porter",
    2,
    "cap8095@gmail.com",
    "EmoryAndHenry"
  );
  expect(intern.getRole()).toEqual(expect.any(String));
});
test("intern's school selection", () => {
  const intern = new Intern(
    "Chris Porter",
    2,
    "cap8095@gmail.com",
    "EmoryAndHenry"
  );
  expect(intern.getSchool()).toEqual(expect.any(String));
});
test("intern object", () => {
  const intern = new Intern(
    "Chris Porter",
    2,
    "cap8095@gmail.com",
    "EmoryAndHenry"
  );
  expect(intern.school).toEqual(expect.any(String));
});
