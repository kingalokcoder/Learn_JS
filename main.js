//object oriented in js
//creating Persos constructor

function Person(firstName ,lastName, age)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    // this.FullName = function()
    // {
    //     return `${this.firstName} ${this.lastName} `
    // }
    // this.Age= function()
    // {
    //     return this.age;
    // }
}
//Use of prototype
Person.prototype.FullName = function()
{
    return `${this.firstName} ${this.lastName} `
}

Person.prototype.Age= function()
{
    return this.age;
}

//Instantiate objects

const person1= new Person('Alok','Ranjan',23);
const person2 = new Person('Ankesh','Raj',22);
console.log(person1);
console.log(person2);
console.log(person1.lastName);
console.log(person2.FullName());
console.log(person1.Age());



