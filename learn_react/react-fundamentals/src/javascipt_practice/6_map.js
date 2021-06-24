const instructors = [
    { name: 'Qunicy', specialty: 'Quantum Physics' },
    { name: 'Laura', specialty: 'Quantum Mechanics' },
    { name: 'Shelby', specialty: 'Quantum Particles' },
    { name: 'Jack', specialty: 'Quantum Separation' },
];
let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
}
);

console.log(instructor_names);

//to avoid having to creaet an empty array to push array elements to, we have the MAP function 

const instructorNames = instructors.map(instructor => instructor.name);
//map function requires a return value 
console.log(instructorNames);

let kvArr = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

console.log(kvArr);

let reformattedArr = kvArr.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});