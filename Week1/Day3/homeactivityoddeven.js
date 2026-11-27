// determine whether a given number is odd or even

function isOddOrEven(number){

    if(number%2===0){
        // console.log("The number is even",number);
        return "even";
    }else{
        // console.log("The number is odd",number);
        return "odd";
    }
}
    let number = 134

   console.log(isOddOrEven(number));