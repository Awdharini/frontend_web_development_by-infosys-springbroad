const arr1 = [1, 2, 3, 242, 45, 657, 2313];

let total = 0;
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i], total);
  total += arr1[i];
}
console.log(total);
/*

for (let i in arr1) {
  console.log(arr1[i], total);
  total += arr1[i];
}
console.log(total);
*/
total = 0;
for (let i = 0, len = arr1.length; i < len; i++) {
  console.log(arr1[i], total);
  total += arr1[i];
}
console.log(total);
