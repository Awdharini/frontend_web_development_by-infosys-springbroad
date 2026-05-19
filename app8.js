let x = 100;
for (let x = 0; x < 10; x++) {
  //console.log(x);
}

while (x < 110) {
  //console.log(x);
  x++;
}

do {
  //console.log(x);
  x++;
} while (x < 10);
//console.log(x);

const test = [10, 34, 24, 54, 32, 45, 67, 89, 90];
//console.log(test.length);
for (let x = 0; x < test.length; x++) {
  //console.log(test[x]);
}

for (let item in test) {
  //console.log(item);
}

for (let x in test) {
  //console.log(x + ":" + test[x]);
}

test.forEach(function (val, index, array) {
  console.log(val + ":" + index);
});

const obj = {
  first: "alice",
  last: "bob",
  one: 1,
  two: 2,
  three: 3,
};

for (let x in obj) {
  //console.log(x);
  //console.log(obj[x]);
}

for (let x in obj) {
  console.log(x + ":" + obj[x]);
}
