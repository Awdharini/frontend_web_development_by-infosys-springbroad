const btn = document.querySelector("button");
let coounter = 0;

btn.addEventListener("click", btnClicked);

function btnClicked(e) {
  console.log(e.target.id);
  e.target.id = "new" + counter;
  counter++;
  console.log("button is clicked");
  e.target.textContent = "clicked (" + counter + ")";
  e.target.classList.toggle("box");
  //btn.textContent = "clicked (" + counter + ")";
  //btn.classList.toggle("box");
}

const h1 = document.queryselector("h1");
h1.onclick = btnclicked;

const holder = document.querySelector(".holder");
const divs = holder.querySelectorAll("div");
console.log(divs);
divs.forEach((el, ind) => {
  const val = el.className;
  el.onclick = function () {
    console.log("onclick" + val);
  };
  el.addEventListener(
    "click",
    (e) => {
      console.log("event false" + val);
    },
    false,
  );
  el.addEventListener(
    "click",
    (e) => {
      console.log("event true" + val);
    },
    true,
  );
});
