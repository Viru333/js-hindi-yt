// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
})(); // this semicolon is explicitly added so that iife knows where to end it's block

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')