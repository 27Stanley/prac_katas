const toggleDoorsSol = (doors) => {
  let openedDoors = [];

  for (let i = 1; i * i <= doors; i++) {
    openedDoors.push(i * i);
  }
  //   console.log(openedDoors);
  return openedDoors;
};

module.exports = toggleDoorsSol;
