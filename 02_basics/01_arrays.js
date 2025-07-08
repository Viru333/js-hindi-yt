// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "nagraj"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr);


// Array methods

// myArr.push(6)
// myArr.push(7) // insert new element in the array at the end
// console.log(myArr);
// myArr.pop() // removes last element from the array
// console.log(myArr);

// myArr.unshift(9) // place 9 at starting of the array and shift all the lements in forward direction, time taking process
// myArr.shift() // shift the array elements to left side , hence first element is lost

// console.log(myArr.includes(9)); // true or false
// console.log(myArr.indexOf(3)); // -1 if not present otherwise return index of element in array

// const newArr =  myArr.join() // converts the array into string 
// console.log(myArr);
// console.log(newArr);

// slice,   splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // end index exclusive copies element in the range(end exclusive).

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) // end is inclusive and it removes the elements from array in the range.
console.log( "C " , myArr);
console.log(myn2);
