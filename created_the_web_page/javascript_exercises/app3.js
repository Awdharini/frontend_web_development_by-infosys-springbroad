const obj1 = {
  name: "niasra",
  age: 20,
  details: {
    hobbies: ["reading", "cooking"],
    address: { city: "new york", country: "usa" },
  },
};

const str = "test";

function deepClone(obj) {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const clone = deepClone(obj1);
clone.name = "jone";
console.log(obj1);
console.log(clone);
