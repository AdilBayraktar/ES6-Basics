const convertToLowerCase = (element) => {
  return element.toLowerCase();
};

const name = "ADIL BAYRAKTAR";
console.log(convertToLowerCase(name));

const transform = (str, func) => {
  return func(str);
};

console.log(transform(name, convertToLowerCase));
