const holder = document.querySelector(".holder");
holder.style.position = "absolute";
const ele = { x: holder.offsetLeft, y: holder.offsetTop };

holder.addEventListener("click", (e) => {
  //console.log(holder.offsetLeft);
  ele.x += 50;
  ele.y -= 5;
  holder.style.left = ele.x + "px";
  holder.style.top = ele.y + "px";
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "arrowLeft") {
    ele.x -= 50;
  } else if (e.key == "arrowRight") {
    ele.x += 50;
  } else if (e.key == "arrowup") {
    ele.y -= 50;
  } else if (e.key == "arrowdown") {
    ele.y += 50;
  }
  holder.style.left = ele.x + "px";
  holder.style.top = ele.y + "px";
});
