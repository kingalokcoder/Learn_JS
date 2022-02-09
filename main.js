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
//Here object is Person which has many
//properties or attributes

// const Person=
// {
//     firstName:"Alok",
//     LastName:"Ranjan",
//     Hobbies:["Music","Self Development","Creating interesting things"],
//     Address:
//     {
//         street:"Gokul co-operative colony",
//         state:"Bihar",
//         city:"Patna"
//     }
// }
// Person.email="alokranjan5111998@gmail.com";
// console.log(Person);
// console.log(Person.firstName,Person.LastName);
// console.log(Person.Hobbies[1]);
// console.log(Person.Address.city);



//Array of objects
// const toDos=
// [
// {
//     id:1,
//     task:"Learn stock",
//     isCompleted:true
// }
// ,
// {
//         id:2,
//         task:"Learn js",
//           isCompleted:true
// }
// ,
// {
//     id:3,
//     task:"learn dsa",
//     isCompleted:false
// }
// ];
// console.log(toDos);
// console.log(toDos[1].task);
// const toDosJson = JSON.stringify(toDos);
// console.log(toDosJson);

// for(let i=0;i<10;i++)
// {
//    console.log(`for loop number ${i}`)
// }

// let t=0;
// while(t<10)
// {
//     console.log(`while loop number ${t}`);
//     t++;
// }



const toDos=
[
{
    id:1,
    task:"Learn stock",
    isCompleted:true
}
,
{
        id:2,
        task:"Learn js",
          isCompleted:true
}
,
{
    id:3,
    task:"learn dsa",
    isCompleted:false
}
];

for(let i=0;i<3;i++)
{
    console.log(toDos[i].task);
}

//Another way of iterating 
for(let todo of toDos)
{
    console.log(todo);
}

for(let todo of toDos)
{
    console.log(todo.task);
}

//Higher order array method for iteration
//forEach, map, filter

toDos.forEach(function(todo)
{
    console.log(todo.isCompleted)
});

//Ruturn an array of task string
const toDoTask= toDos.map(function(todo)
{
    return todo.task;
});
console.log(toDoTask);

const isCompleted = toDos.filter(function(todo)
{
    return todo.isCompleted==true;
});
console.log(isCompleted);