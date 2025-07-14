const prompt = require("prompt-sunc")()

function getNumber(numberString){
    while (true){
        const num1 = parseFloat(prompt("Enter Number " +numberString +": "))
        if (IsNan(num1)){
            console.log("Invalid input")
        }else{
            return number
        }
    }
}

const num1 = getNumber('One');
const num2 = getNumber('Two');

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
        if (num2 === 0){
            valid = false
            console.log("Zero division error..")
        }
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

