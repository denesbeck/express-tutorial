const myFunc = () => {
  let num;

  return function createRandomNumber() {
    num = Math.random();
    return num;
  };
};

const num = myFunc();

module.exports = num();
