function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return 'My name is ' + this.name + ' and I am ' + this.age;
};

function myNew (Constructor, ...args) {
    return new Person(...args)
}

let john = new Person('John', 30);
let jack = new Person('Jack', 40);
let johnNew = myNew(Person, 'John', 30);
