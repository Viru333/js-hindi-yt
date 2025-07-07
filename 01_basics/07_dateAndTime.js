let myDate = new Date()
// console.log(myDate.toDateString()); // Mon Jul 07 2025
// console.log(myDate.toISOString()); // 2025-07-07T16:44:30.327Z
// console.log(myDate.toJSON()); // 2025-07-07T16:44:30.327Z
// console.log(myDate.toLocaleDateString()); // 7/7/2025
// console.log(myDate.toLocaleString()); // 7/7/2025, 4:44:30 PM
// console.log(myDate.toString()); // Mon Jul 07 2025 16:40:39 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString()); // 16:44:30 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); // Mon, 07 Jul 2025 16:44:30 GMT

// let myCreatedDate = new Date(2023, 0, 23) // Month starts from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023") // here the month is starting from 1

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    Timezone: "Asia/Kolkata"
}));

