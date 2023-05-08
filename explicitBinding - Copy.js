const person = {
    name : "Bannu",
    getName : function() {
        console.log(this.name);
    }
    // sayMyName : function () {
    //     console.log(`My name is ${this.name}`);
    // },
};

function sayMyName () {
    console.log(`My name is ${this.name}`);
}

sayMyName.call(person);
sayMyName.apply(person);

this.myName = "Raju";

function show() {
    console.log(this.myName);
}

show.call(this);