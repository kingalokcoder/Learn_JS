//conditional

//only values are matched not data type
const x=10;

if(x=='10')
{
    console.log("x is 10");
}

const y=20;
if(y===10)//matches both data type and value
{
    console.log("y is 10");
}
else if(y<10)
{
    console.log("y is less than 10");
}
else
{
    console.log("y is 20");
}