//ES6 JS Classes

 
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    };


//METHOD 1 
greet() {
    console.log(`Welcome back, ${this.name}`);
};

//METHOD 2

status() {
    console.log(`Current status: ${this.type}`)
};

};

//instance of the class (new object)

let anonDude = new User('Anon Dude');

//we can now user the new instance and the . operator to acces the two methods

anonDude.greet();
anonDude.status();

//Another instance sof the class

let anonLady = new User('Anon Lady');
anonLady.greet();
anonLady.status();

//Another instance
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

let em = new User('Em J');
em.greet();
em.status();