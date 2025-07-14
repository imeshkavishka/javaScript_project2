const prompt = require("prompt-sunc")()
const num1 = parseFloat(prompt("Enter First Number : "))
const num2 = parseFloat(prompt("Enter Second Number :"))
const operator = prompt("Enter Sign")

let result;
switch(operator){
    case "+":
        result = num1+num2
        console.log(result)
        break;
    case "-":
        result = num1-num2
        console.log(result)
        break;
    case "/":
        result = num1/num2
        console.log(result)
        break;
    case "*":
        result = num1*num2
        console.log(result)
        break;

    default:
        console.log("Invalid Character")
        break;
}