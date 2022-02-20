//functions

function addNums(num1,num2)
{
    return (num1+num2);
}

console.log(addNums());//Out put NaN
console.log(addNums(4,5));//out 9
function addNumbers(num1=1,num2=8)
{
    console.log(num1+num2);
}
addNumbers();//9 default activated
addNumbers(10,8);

//learn arrow function in detail