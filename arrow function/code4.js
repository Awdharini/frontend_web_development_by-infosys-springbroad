const a = "hello";
console.log(a);
abc();

function abc() {
  const a = "world";
  console.log(a);
}

function mycount() {
  let count = 0; //closer value
  return function () {
    return count++;
  };
}
function mycount2() {
  let count = 0; //non-closer value
  return count++;
}

let cnt = mycount();
let cnt2 = mycount2;

for (let x; x < 10; x++) {
  console.log(cnt());
  console.log(cnt2());
}
