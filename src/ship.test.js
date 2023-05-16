const Ship = require("./ship");

test("Ship has a length", () => {
  const ship = Ship(4);
  expect(ship.getLength()).toBe(4);
});

test("Ship has a hit function", () => {
  const ship = Ship(4);
  expect(ship.hit).toBeDefined();
});

test("Ship hit function reduces length", () => {
  const ship = Ship(4);
  ship.hit();
  expect(ship.getLength()).toBe(3);
});

test("Ship hit function throws error when length is 0", () => {
  const ship = Ship(1);
  ship.hit();
  expect(() => ship.hit()).toThrow("Ship is sunk");
});
