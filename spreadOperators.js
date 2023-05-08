function addFourNumbers(num1,num2,num3,num4){
    return num1 + num2 + num3 + num4;
  }
  
  let fourNumbers = [5, 6, 7, 8];
  
  console.log(addFourNumbers(...fourNumbers));
  
  // Spreads [5,6,7,8] as 5,6,7,8