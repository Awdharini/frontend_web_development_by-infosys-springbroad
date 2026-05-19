const url = "my1.json";
const output = document.querySelector(".output");
const dataSt =
  '{"name":"niasra","age":42,"address":{"city":"bangalore","state":"karnataka"},"phoneNumber":[{"type":"home","number":"98';
console.log(dataSt);
const dataobj = JSON.parse(dataSt);
console.log(dataobj);

output.addEventListener("click", getJsonData());

function getJsonData() {
  output.textContent = "loading....";
  fetch(url)
    .then((reponse) => Response.json())
    .then((data) => {
      myoutput(data);
    })
    .catch((error) => {
      console.log("error:", error);
    });
}

function myoutput(data) {
  let html = `<h1>${data.name}</h1>`;
  html = `<div>${data.age}</div><div>${data.address.city}</div> `;
  data.phoneNumber.forEach((ele) => {
    html += `<small>${ele}-(${ele.number})</small>`;
  });
  html += JSON.stringify(data);
  output.textContent = html;
  output.innerHTML = html;
}
