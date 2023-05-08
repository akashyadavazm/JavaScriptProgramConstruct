console.log("a");
setTimeout ( () => {
    console.log("b");
    setTimeout ( () => {
        console.log("c");
    },1000 );
}, 5000);
console.log("d");