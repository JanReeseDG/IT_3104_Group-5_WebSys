let number = Number(prompt("Enter a number: "));

if (number > 0){
    if(number % 2 === 0){
        console.log("The number is even.");
    } else{
        console.log("The number is odd.");
    }
} else{
    console.log("The number is negative.");
}