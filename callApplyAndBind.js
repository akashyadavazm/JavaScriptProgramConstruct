function saySomething(message){
    return this.name + " is " + message;
  }     
  var person4 = {name:  "John"};     
console.log(  saySomething.call(person4, "awesome"));

function saySomething(message){
    return this.name + " is " + message;
  }        
    var person4 = {name:  "John"};
    console.log(  saySomething.apply(person4, ["awesome"]));

    var bikeDetails = {
        displayDetails: function(registrationNumber,brandName){
        return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
      }
    }
       
    var person1 = {name:  "Vivek"};
         
    var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

    console.log(detailsOfPerson1());