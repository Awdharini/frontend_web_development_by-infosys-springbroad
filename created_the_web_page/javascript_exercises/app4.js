function debounce(fn, delay) {
  let timeoutid;
  return function (...args) {
    if (timeoutid) {
      clearTimeout(timeoutid);
    }
    timeoutid = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
function onResize() {
  console.log("resized:", new Date().toLocalTimeString());
}
window.addEventListener("resize", debounce(onResize, 1000));
