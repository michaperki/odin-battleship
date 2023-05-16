const Ship = require('./ship');

test('Ship has a length', () => {
  const ship = Ship(4);
  expect(ship.length).toBe(4);
});