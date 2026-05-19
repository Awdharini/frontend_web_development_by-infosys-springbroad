const output = document.querySelector(".output");
console.log(output.style);
output.style.color = "red";
console.log(output.style.color);

const ele1 = document.querySelector("div.output");
ele1.style.color = "rgb(0,255,255)";
ele1.style.fontSize = "30px";
ele1.style.backgroundColor = "black";
ele1.style.padding = "10px";
ele1.style.border = "5px solid pink";
ele1.style.bordercolor = "yellow";

ele1.setAttribute("style", "");

const eles = document.querySelectorAll("div");
eles.forEach((el, index) => {
  console.log(el);
  el.style.textTransform = "uppercase";
  if (el.classList.contains("output")) {
    el.innerHTML += "^^^^^OUTPUT^^^^^";
  }

  el.style.color = "blue";
  el.style.fontSize = "20px";
  el.style.backgroundColor = "gray";
  el.style.padding = "10px";
  el.style.border = "5px solid pink";
  el.style.borderColor = "yellow";
  el.classList.add("box");
  el.classList.remove("box");
  el.setAttribute("id", "id" + (index + 1));
  console.log(el.classList.contains("active"));
});
