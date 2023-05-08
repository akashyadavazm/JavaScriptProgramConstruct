this.name = 'Akash';
console.log(this.name);
let regFun = function() {
    this.age = 25;
    console.log(this.name, this.age);
    const arFun = () => {
        console.log(this.name, this.age);
    }
    arFun();
};
regFun();

let arowFun = () => {
    console.log(this.name);
};

arowFun();