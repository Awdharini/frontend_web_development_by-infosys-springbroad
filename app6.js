const myfun1 = (function () {
  //console.log("fun1");
  return "1";
})();
//console.log(myfun1);
//myfun1();
//myfun1();
//myfun1();
const val1 = myfun1;
//console.log(val1);

const myfun3 = function () {
  //console.log("fun3");
  return "3";
};
//console.log(myfun3());

function myfun2() {
  //console.log("fun2");
  return "2";
}
//console.log(myfun2());

//myfun2();
//myfun2();
//myfun2();

let val = adder(5, 10);
console.log(val);
console.log(adder(20, 30));

let a = 5;
let b = 10;
let test = a + "+" + b + "*100" + "=" + (a, b);
console.log(test);
console.log(a + "+" + b + "*100" + "=" + (a, b));

function adder(x, y) {
  let val = x + y;
  return val;
  console.log("This will never be executed");
}
