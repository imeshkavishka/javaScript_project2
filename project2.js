const prompt = require("prompt-sunc")()

let num1;
let num2;
while (true){
    num1 = parseFloat(prompt("Enter First Number : "))
    if (IsNan(num1)){
        console.log("Invalid input")
    }else{
        break
    }
}

while (true){
    num2 = parseFloat(prompt("Enter Second Number :"))
    if (IsNan(num2 )){
        console.log("Invalid input")
    }else{
        break
    }
}

const operator = prompt("Enter Sign")

let result;
let valid = true; 
switch(operator){
    case "+":
        result = num1+num2

        break;
    case "-":
        result = num1-num2

        break;
    case "/":
        result = num1/num2

        break;
    case "*":
        result = num1*num2

        break;

    default:
        console.log("Invalid Character")
        valid = false;
        break;
}
 
if(valid)
    console.log(num1,operator,num2,"=",result)

