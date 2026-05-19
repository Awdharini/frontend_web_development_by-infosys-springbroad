const btn = document.querySelector("button");
const holder = document.querySelector(".holder");
/*const h1=document.querySelector("h1");
h1.addEventListener("click", (temp,{once:true}));

function temp(){
  console.log("test");
  h1.style.color='red';
} */

const input = document.querySelectorAll("input");
const h1 = document.querySelector("h1");

btn.addEventListener("click", adder);
btn.addEventListener("click", (e) => {
  console.log("two");
});

btn.addEventListener("mouseover", (e) => {
  holder.style.backgroundColor = "yellow";
  holder.classList.toggle("box");
});

btn.addEventListener("mouseout", (e) => {
  holder.style.backgroundColor = "transparent";
  holder.classList.toggle("box");
});

holder.addEventListener("click", (e) => {
  holder.style.background = "blue";
});

holder.addEventListener("click", () => {
  output("test", e);
});

function output(a) {
  console.log(a);
}

function adder(e) {
  const el = e.target;
  el.removeEventListener("click", adder);
  el.style.color = "#ddd";
  console.log("clicked");
}

input.forEach((el) => {
  el.addEventListener("changes", updater);
  el.addEventListener("focus", (e) => {
    consolelog(el.textContent);
    el.style.background = "red";
    el.style.color = "white";
  });
  el.addEventListener("focusout", (e) => {
    //focusout is used to remove the focus from the element or blur can be used
    consolelog(el.textContent);
    el.style.background = "transparent";
    el.style.color = "black";
  });
});

function updater(e) {
  const val = e.target.value;
  h1.textContent = val;
}
//console.dir(h1); it will gives the event details of the element and console.log(h1) will gives the element details.
