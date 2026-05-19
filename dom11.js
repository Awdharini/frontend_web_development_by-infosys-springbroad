const output = document.querySelector(".output");
document.body.prepend(output);
output.textContent = "javascript";
output.style.width = "100px";
output.style.height = "100px";
output.style.background = "red";
output.style.textAligin = "center";
output.style.lineHeight = "100px";
output.style.color = "white";
output.style.position = "absolute";

function ran() {
  return Math.floor(Math.random() * 500);
}

output.addEventListener("click", () => {
  const col = "(" + ran() + "," + ran() + "," + ran() + ")";
  output.style.background = col;
  console.log(col);
});
const player = {
  x: 0,
  y: 0,
  speed: 10,
  ani: window.requestAnimationFrame(moveMe),
};

const key2 = {
  arrowdown: false,
  arrowup: false,
  arrowleft: false,
  arrowright: false,
};

window.addEventListener("keydown", (e) => {
  key2[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  key2[e.code] = false;
});

function moveMe() {
  if (key2.arrowright) {
    player.x += player.speed;
  }
  if (key2.arrowleft) {
    player.x -= player.speed;
  }
  if (key2.arrowup) {
    player.y -= player.speed;
  }
  if (key2.arrowdown) {
    player.y += player.speed;
  }
  output.style.left = player.x + "px";
  output.style.top = player.y + "px";
  player.ani = window.requestAnimationFrame(moveMe);
}
