const checkUnderAge = (age) => new Promise( (resolve, reject) => {
    if(age > 18){
        resolve("Success");
    }else{
        reject("UnderAge");
    }
});

checkUnderAge(17)
.then((tru) => console.log(tru))
.catch( (flse) => console.log(flse) );

// -->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->
const checkUnderAge1 = (age) => {
    let msg = " ";
    if(age > 18) {
        setTimeout(() => {
            msg = "Success";
            console.log(msg);
        }, 500);
    }else{
        setTimeout( () => {
            msg = "UnderAge";
            console.log(msg);
        }, 1000);
    }
    return msg;
};

console.log(checkUnderAge1(34));