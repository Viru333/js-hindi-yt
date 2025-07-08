const marvel_heroes = ["thor", "ironman", " spiderman"]
const dc_heroes  = ["Batman", "flash", "superman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("Aman"));
console.log(Array.from("Aman")); // cretaes element into array
console.log(Array.from({name: "Aman"})); // interesting as it is not given whether to make array of keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));