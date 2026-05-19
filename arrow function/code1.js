const arr1 = [1, 4, 53, 25, 53, 77, 34, 12];
const arr2 = ["niasra", "like", "dev", "archana"];
const arr3 = ["niasra", "like", "dev", "archana"];
let val = arr1.evert((ele) => {
  console.log(ele);
  return ele < 10;
});

val = arr1.every(callBackFun);

function callBackFun(ele, ind, arr) {
  console.log(`${ele} ${ind}`);
  return ele < 100;
}

console.log(val);

console.log(arr1.every((x) => x < 10000));
console.log(arr1.every((x) => x < 1000));

console.clear();
val = arr2.evert((ele) => {
  console.log(ele);
  return ele.length < 6; //return ele ==  "niasra";
});
console.log(val);

val = arr3.evert((ele) => {
  console.log(ele);
  return arr3.includes(ele); //return ele ==  "niasra";
});
console.log(val);
