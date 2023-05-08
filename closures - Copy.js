// Definition : Closures are an ability
//  of a function to remember the variables and functions that are
//  declared in its outer scope.


var Person = function(pName){
    var name = pName;
  
    this.getName = function(){
      return name;
    }
  }
  
  var person = new Person("Akash");
  console.log(person.getName());

  function outer() {
    let counter = 0;
    function inner () {
        counter++;
        console.log(counter);
    }
    return inner;
  }

  let fn = outer();
  fn();
  fn();
  fn();


  function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
  }
  
  var initialiseClosure = randomFunc(); // Returns a function
  
  initialiseClosure(); 