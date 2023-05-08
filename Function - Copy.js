//-->-->-->-->-->-->  REGULAR FUNCTION  -->-->-->-->-->-->-->-->
let regularFun = function(x) {
    console.log('Regular Function');
    return x*x;
} 
console.log(regularFun(21));
// -->-->-->Another-->-->-->
let user = {
    show(){
        console.log(arguments);
    }
};
user.show(1, 2, 3);

// -->-->-->-->-->-->  IIFE -->-->-->-->-->-->-->-->-->-->-->-->-->
// Immediate Invoke Function Expression
(function(){
    console.log("IIFE");
})();

// -->-->-->-->-->--> ARROW FUNCTION-->-->-->-->-->-->-->-->-->
const arrowFun = () => {
    console.log("Arrow Function");
};

arrowFun();

//-->-->-->-->-->-->  ANONYMOUS FUNCTION -->-->-->-->-->-->-->-->
let anonymousFun = function(){
    console.log('Anonymous Function');
}

anonymousFun();
// 1 ) IIFE Regular Anonymous Function
(function(){
    console.log("IIFE Regular Anonymous Function");
})();

// 2 ) IIFE Arrow Anonymous Function
( () => {
    console.log('IIFE Arrow Anonymous Function');
})();