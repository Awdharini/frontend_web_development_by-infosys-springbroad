let boo = null;
//if boo =44 then the output will be trun and for boo =null then output is it is something else
if (boo) {
  console.log("This is true");
} else if (boo == false) {
  console.log("boo is false");
} else {
  console.log("boo is something else");
}

let a = 40;
let b = 10;
checker(10, 40);
checker(50, 50);
checker(50, 40);

function checker(a, b) {
  let rep;
  if (a > b) {
    rep = a + " is bigger than " + b;
  } else if (a == b) {
    rep = a + " is equal to " + b;
  } else {
    rep = a + " is not bigger than" + b;
  }
  console.log(rep);
}
