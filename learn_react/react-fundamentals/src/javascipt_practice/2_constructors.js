class User {
    constructor(first, last, e) {
        //the left side stores the incoming arguments
//for the "this" object that was/will just be created         
        //the right side are the values
        //left side are teh keys 
        this.f = first;
        this.l = last;
        this.email = e;}
}

let userOne = new User('Paul', "O'Conner", 'poconner@elevenfifty.org');
console.log(userOne.first);
console.log(userOne.f); //paul 
console.log(userOne.l); //oconner
console.log(userOne); //prints whole object 


