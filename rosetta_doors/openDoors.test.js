const toggleDoors = require("./openDoors.js");

describe.only("Which Doors are Open?", () => {
  test("When given a number of doors, function returns an array", () => {
    expect(Array.isArray(toggleDoors(10))).toBe(true);
    expect(Array.isArray(toggleDoors(100))).toBe(true);
  });

  test("Returns an array with the index of each door that is open when passed a number of doors", () => {
    expect(toggleDoors(5)).toEqual([1, 4]);
    expect(toggleDoors(100)).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
  });
});
