//console.log(name); we will get error
const myname="niasra\'s";//no error even with single codes
let val='string';
val=99;
val="100"+100;//it will consider both 100 as string because oe 100 as double codes
val=100+100;//it will add both the 100 together
val=100+100+'100';//if we donot give string at the start we will not get the concation of strings
//but if we add ("") at the start we will get the concation value

val=undefined;//it is default value
let val1;
val=null;//it is not default value 
let a,b,c,d;
b=100;//number datatype
val=true;//boolean values
val=false;

console.log(myname);
console.log(val);
console.log(typeof (b));//it will give out the datatyoe

