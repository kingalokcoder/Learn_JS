// console.log("Learning after long time");
// console.error("Kepp trying after getting error");
// console.warn("This is warning");

// let a=50;
// a=120;
// console.log(a);

// const b=50;
// b=100; error because we can't reassging const value;

//let and const is of block scoped while var is of global scope.
// const str="Hello world";
// console.log(str.length);
// const name="Alok",age=25;
// Two ways of concating string 
// console.log("My name is " +name + " my age is"+age);
// console.log(`my name is ${name} and my age is ${age}`);

//   if(true)
//   {
//     var age=10;
//     if(true)
//     {
//          var age=15;
//         console.log(age);
//     }
//       var age =15;
//     console.log(age);
// }
// can redeclare in var 

// if(true)
//   {
//     let age=10;
//     if(true)
//     {
//         let age=15;
//         console.log(age);
//     }
//     console.log(age);
// }

// out- 15,10;

// if(true)
//   {
//     let age=10;
//     if(true)
//     {
//         let age=15;
//         console.log(age);
//     }
//     let age =25; -- cannot declare within same
//     console.log(age);
// }




// const str="Experimenting Javascript";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//state name
// const state="Bihar, Asam, Punjab, Delhi, Jharkhand"
// console.log(state.split(', '));

//aray formation using constructor
// const cricketer = new Array("Kolhi","Sachin","Rahul");
// console.log(cricketer);

// const array = [true,'Rahul','Simran',1234];
// array[2]='Jia';
// array[4]=false;
// array.push(147);
// array.unshift('Rahul');
// array.unshift("Begin_add");
// array.pop();
// console.log(array);
// console.log(Array.isArray(array));
// console.log(Array.isArray('Rahul'));
// console.log(array.indexOf('Rahul'));
// console.log(array);



//key-value pair
const Person=
{
    firstName:"Alok",
    LastName:"Ranjan",
    Hobbies:["Music","Self Development","Creating interesting things"],
    Address:
    {
        street:"Gokul co-operative colony",
        state:"Bihar",
        city:"Patna"
    }
}






