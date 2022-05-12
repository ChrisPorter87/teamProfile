const Engineer = require("../lib/Engineer");

test("engineer Github", () => {
  const engineer = new Engineer(
    "Chris Porter",
    2,
    "cap8095@gmail.com",
    "ChrisPorter87"
  );
  expect(engineer.github).toEqual(expect.any(String));
});

test("employee position", () => {
  const engineer = new Engineer(
    "Chris Porter",
    2,
    "cap8095@gmail.com",
    "ChrisPorter87"
  );
  expect(engineer.getRole()).toEqual(expect.any(String));
});
test("engineer object", () => {
  const engineer = new Engineer(
    "Chris Porter",
    2,
    "cap8095@gmail.com",
    "ChrisPorter87"
  );
  expect(engineer.github).toEqual(expect.any(String));
});
