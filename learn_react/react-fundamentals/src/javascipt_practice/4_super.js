
class User {
    constructor(name){
        this.name = username;
        this.password = password;
        this.type = "Trial User";
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
};

class BronzeLevelUser extends User {
    constructor(username, password, ccinfo) {
        super(username, password)
        this.type = 'Bronze User',
        this.ccinfo = ccinfo
    }
    
    getInfo() {
    console.log(this.username, this.password, this.type, this.ccinfo)}
};

let bronzino = new BronzeLevelUser('Bronzino', 'bronze1234', 0000111100001111);
bronzino.greet();
bronzino.status();
console.log(bronzino);


let anonDude = new User('Anon Dude');
anonDude.greet();
anonDude.status();

let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

