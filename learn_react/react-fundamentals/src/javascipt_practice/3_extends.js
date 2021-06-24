
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

class TrialUser extends User {
    trialEnding() {
        console.log(`You trial is ending soon, ${this.name}. Would you like to join our program?`);
    };
};

class BannedUser extends User {
    exitMessage() {
    console.log(`${this.name} you are banned from our platform because your trial has expired.`)}
}

let anonDude = new User('Anon Dude');
anonDude.greet();
anonDude.status();

let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

