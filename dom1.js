console.dir(document);
let val = document.URL;
console.log(val);
let ele = document.querySelector(".output");
console.dir(ele.textContent);
ele.textContent = "Hello World";
console.log(ele.textContent);

/*
let  mydom={
    url:"my url",
    children:{
        {html:{
            'body':'content'
        }}
    }
} */
