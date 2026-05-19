const val1 = 10;

function outerFun(x) {
  const val2 = 10;
  console.log(val1);
  function innerFun() {
    return x + val2 + val1;
  }
  return innerFun;
}
const val3 = outerFun(15);
console.log(val3());

for (let x = 0; x < 10; x++) {
  console.log(outerFun(x + 2)());
}
