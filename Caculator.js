var num1=parseFloat(prompt("enter the first number:"));
var op=prompt("enter the operator:");
var num2=parseFloat(prompt("enter the second number:"));
var result;
switch(op){
    case '+':
        result=num1+num2;
        break;
    case '-':
        result=num1-num2;
        break;
    case '*':
        result=num1*num2;
        break;
    case '/':
        if(num2 == 0){
            console.log("cannot divided by zero");
        }
        result=num1/num2; 
        break;
    case '%':
        result=num1%num2;
        break;
    default:
        console.log("please enter the valid operator");
}
console.log(result);