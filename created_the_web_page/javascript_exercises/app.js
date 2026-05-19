Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = number.myMap((num) => num * 2);
console.log(double);
