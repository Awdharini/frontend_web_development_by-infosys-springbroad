const output = document.querySelector(".output");
const images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg"];
for (let x = 0; x < 4; x++) {
  const el = document.createElement("div");
  output.append(el);
  cGallery(el);
}
const eles = document.querySelectorAll(".gal");
eles.forEach((el) => {
  cGallery(el);
});

cGallery(output);

function cGallery(parentEle) {
  let curImage = 0;

  const gallery = document.createElement("div");
  const curImage = document.createElement("img");
  curImage.setAttribute("src", "one.jpg");
  const btn1 = document.createElement("button");
  btn1.textContent = "prev";
  const btn2 = document.createElement("button");
  btn2.textContent = "next";

  parentEle.append(gallery);
  gallery.append(curImage);
  gallery.append(btn1);
  gallery.append(btn2);

  btn1.addEventListener("click", () => {
    curIndex--;
    if (curIndex < 0) {
      curIndex = images.length - 1;
    }
    console.log(curIndex);
    curImage.src = image[curIndex];
  });
  btn2.addEventListener("click", () => {
    curIndex++;
    if (curIndex >= images.length) {
      curIndex = 0;
    }
    console.log(curIndex);
    curImage.src = image[curIndex];
  });
}
