/*

    1. Create a simple discount calculator that takes two values from the variables - the total price and the discount percentage - and prints the discounted value.

*/

let totalValue = 2000;
let dicountPercentage = 20;

let discountedPrice = totalValue - (totalValue * dicountPercentage / 100);

console.log("The final price after dicount is: Rs." + discountedPrice);