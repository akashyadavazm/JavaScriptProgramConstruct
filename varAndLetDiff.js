function greetPerson (name) {

    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hello there";
    }
    console.log(greet);
    var greet;
}
greetPerson("Chandler");

var $ = 1;
var b = 2;

if ($ === 1){
    var $ = 10;
    let b = 20;
    console.log($);
    console.log(b);
}
console.log($);
console.log(b);