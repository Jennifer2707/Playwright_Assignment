//determine whether a number is positive, negative, or zero

function checkNumber(num) {  // Create a function
    let number = num; // Declares and initializes a variable

    if (number > 0) { // Checks whether the number is positive
        return "Positive Number";
    } 
    else if (number < 0) { // Checks whether the number is negative
        return "Negative Number";
    } 
    else { // Executes when the number is zero
        return "Neutral Number"; 
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));