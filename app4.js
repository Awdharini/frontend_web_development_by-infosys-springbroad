const myarr = ["string", 100, true];
//console.log(myarr);
//console.log(myarr[0]);

myarr[0] = "new value";
//console.log(typeof myarr);
const myobj = {
  fisrt: "string",
  val: 100,
  boo: true,
};
console.log(myobj);
console.log(typeof myobj);

console.log(myobj["fisrt"]);
myobj["fisrt"] = "new value";
console.log(myobj["boo"]);
myobj["boo"] = "new value"; //["boo"] is a bracret notation
console.log(myobj.boo); //. is a dot notation

const myname = {
  first: "john",
  last: "doe",
  arr: [1, 23, 4, 5],
  myobj: {
    one: "value1",
    two: "value2",
  },
};
console.log(myname.myobj.two);
console.log(myname["myobj"]["two"]);

const myarr2 = myarr;
myarr2[2] = "wow";
console.log(myarr);
console.log(myarr2);

const myobj2 = myobj;
myobj2.fisrt = "amazing";
console.log(myobj);
console.log(myobj2);
