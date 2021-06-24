const arr = ['thing', 42, false, { key: "value" }, [1, 2]];

let str = arr[0];
let num = arr[1];
let obj = arr[2];
let nan = arr[arr.length - 1];

//without arr destructuring the process of grabbing elemetns from an array and assign them to vars is very time consuming

//enter arr destructuring 

let [string, num, obj, , nan] = array;
console.log(string, num, obj, nan);

//spread operator 

let newArr = ["a", 1, undefined, ...arr];
console.log(newArr);