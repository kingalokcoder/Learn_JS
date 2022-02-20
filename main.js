class Person
{
    constructor(firstName,lastName,age)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get Age()
    {
        return this.age;
    }
    get FullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}

person1 =new Person('Alok','Ranjan',23);
person2=new Person('Anjesh','Halwai',22);
console.log(person1);
console.log(person2);
console.log(person1.age);