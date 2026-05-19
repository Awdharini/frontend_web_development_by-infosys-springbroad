const output = document.querySelector(".output");
const userval = document.querySelector('input[name="userName"]');
const btn = document.querySelector("button");

userval.style.bordercolor = "black";
btn.onclick = () => {
  if (userval.nodeValue.length > 3) {
    const message = `welcome to the site $ {userval.value}`;
    output.textContent = message;
    userval.style.display = "none";
    btn.style.display = "none";
  } else {
    output.textContent = "name length must be 3+ characters";
    userval.Style.border = "red";
  }
};
