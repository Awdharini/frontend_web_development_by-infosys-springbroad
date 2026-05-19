const outputs = document.querySelectorAll(".output");
const html = '<div style="color:pink">Hello Niasra</div>';

console.log(outputs[0].tagName); //tagName is used to get the name of the tag of the element
if (outputs[0].tagName != "H1") {
  outputs[0].textContent = html;
}
outputs[0].textContent = "test";
outputs[1].innerHTML = html;

outputs.forEach(function (el) {
  if (el.tagName != "H1") {
    el.innerHTML = html;
  }
});

outputs.forEach((el, ind) => {
  if (el.tagName != "H1") {
    el.innerHTML = html;
  }
  el.innerHTML += " " + ind;
});

document.write(html);
