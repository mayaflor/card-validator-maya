module.exports.cardValidator = function cardValidator (creditCardNumber){
  if (creditCardNumber === "") {
    throw new Error ("Type a credit card number");
  };
  if (creditCardNumber === /[a-zA-Z]/ ) {
    throw new Error ("Type only numbers");
  };
  if (creditCardNumber.length < 2) {
    throw new Error ("Type a valid amount of numbers");
  };
  const reversedNumbers = creditCardNumber.split("").reverse();

  let result = 0;
  for (var i = 0; i < reversedNumbers.length; i++) {
    if (i % 2 === 0) {
      result += parseInt(reversedNumbers[i]);
    } else {
      product = reversedNumbers[i] * 2;
      if (product >= 10) {
        product = product - 9;
      }
      result += product;
    }
  }
  
    if (result % 10 === 0){
      return true;
    } else {
      return false;
    };
}


