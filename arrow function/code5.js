const output = document.querySelector("#output");

function adder(val) {
  return function (val2) {
    return val + val2;
  };
}

let a1 = adder(10);
console.log(a1(20));

for (let x = 0; x < 10; x++) {
  output.innerHTML += `output ${a1(2)}<div>`;
}
