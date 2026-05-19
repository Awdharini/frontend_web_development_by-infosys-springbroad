const first = document.querySelector('input[name="first"]');
const last = document.querySelector('input[name="last"]');
const ckb = document.querySelector('input[type="checkbox"]');
first.setAttribute("placeholder", "first name");
last.setAttribute("placeholder", "last name");

first.value = "john";
last.value = "doe";

ckb.checked = false; //true or false
