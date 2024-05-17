/*

    6. Create a function that takes a string as input and returns the string reversed using string manipulation
    techniques.

*/

function reverseString(input)
{
    return input.split("").reverse().join("");
}

const originalString = "Code With Deb";
const reversedString = reverseString(originalString);
console.log(reversedString);
