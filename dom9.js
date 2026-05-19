const first = document.querySelector("input");
const btn = document.querySelector("button");
const holder = document.querySelector(".holder");
const div = document.createElement("div");
const output = document.querySelector(".output");
output.style.border = "1px solid red";
let counter = 0;
output.addEventListener("click", adder);

first.value = "niasra";
btn.addEventListener("click", (e) => {
  holder.innerHTML = "";
  console.log(first.value);
  const div = document.createElement("div");
  div.textContent = first.value;
  console.log(div);
  const div1 = document.createElement("div");
  holder.append(div);
  div1.textContent = "hello";
  holder.append(div);
  holder.prepend(div);
  div.style.color = "red";
});

function adder() {
  counter++;
  console.log("clicked");
  const newEle = createEle("div", output, "hi" + counter);
  console.log(newEle);
  newEle.style.background = "yellow";
}

function createEle(elType, parent) {
  const ele = document.createElement(elType);
  ele.innerHTML = html;
  return parent.appendChild(ele);
}
