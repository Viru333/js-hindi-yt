const name = "aman"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('amanky-aky-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);



console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4); // end value is exclusive
console.log(newString);

// const gameName = new String('amanky')
const anotherString = gameName.slice(-5, 4);
console.log(anotherString);

const newStringOne = "          Aman       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aman.com/aman%20kumar"

console.log(url.replace('%20', '-'));
console.log(url.includes('hello'));

console.log(gameName.split('-'));

