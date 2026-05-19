(function (a) {
  //((a)=>{console.log('hi)})
  console.log(a);
})("hello world");

let val = "test";

const test1 = function (a, b, c) {
  return a + b + c;
};
const test2 = (a, b, c) => {
  return a + b + c;
};
const test3 = (a, b, c) => a + b + c;

const test4 = (a) => a + 3 * 2;

const test5 = (c, a = 10, b = 20) => {
  return a + b + c;
};
val = test1(5, 6, 23);
val = test2(5, 6, 23);
val = test3(5, 6, 23);
val = test4(23);
val = test5(6);

const myobj = {
  a: 5,
  b: () => console.log("hello"),
  c: function () {
    console.log("this");
  },
  d: () => console.log(this),
};

myobj.b();
myobj.c();
myobj.d();

const output = document.querySelector(".output");
output.addEventListener("click", (e) => {
  console.log("clicked");
});
output.addEventListener("click", function (e) {
  console.log("click 2");
});

console.log(val);
output.innerHTML = val;
console.clear();

const arr = [35, 6, 33, 68, 11, 62, 12];
const temp = arr.reduce((a, b) => a + b);
console.log(temp);

const temp1 = arr.filter((a) => a > 2);
console.log(temp1);

const temp2 = arr.map((a) => a * 2);
console.log(temp2);
