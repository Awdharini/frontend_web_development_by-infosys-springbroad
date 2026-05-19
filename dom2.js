const ele1 = document.getElementById("myele");
console.log(ele1);

const ele2 = document.querySelector(".output");
console.log(ele2);

const val1 = "h1";
const ele3 = document.querySelector(val1);
console.log(ele3);

const ele4 = document.querySelector("#myele");
console.log(ele4);

console.log(ele1.textContent);
ele1.textContent = "Hello niasra ";
console.log(ele4.textContent);

const myobj = {
  first: "Hello",
};
const my1 = myobj;
const my2 = myobj;
my1.first = "niasra";
console.log(my2);

const eles1 = document.querySelectorAll(".output");
console.log(eles1);
const eles2 = document.querySelectorAll("h1");
console.log(eles2);
//console.clear();

eles1.forEach(function (ele, ind) {
  console.log(ele.textContent);
  ele.textContent = "my element" + ind;
});
