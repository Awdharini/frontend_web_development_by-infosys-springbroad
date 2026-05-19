const output = document.querySelector(".output");

const url = "my1.json";
const xhr = new XMLHttpRequest();
xhr.open("get", url);
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    maker(data);
  } else {
    console.error(xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error(xhr.statusText);
};
xhr.send();

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    maker(data);
  })
  .catch((err) => console.error(err));

function maker(data) {
  data.forEach((ele) => {
    output.innerHTML += `<div>${ele.name}</div>
    <small>${json.stringify(ele)}<small>`;
  });
  output.innerHTML += "<h1>";
}
