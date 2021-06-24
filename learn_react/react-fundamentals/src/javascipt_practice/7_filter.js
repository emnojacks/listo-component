const instructors = [
    { name: 'Qunicy', specialty: 'Quantum Physics', awards: 7 },
    { name: 'Laura', specialty: 'Quantum Mechanics', awards: 6},
    { name: 'Shelby', specialty: 'Quantum Particles', awards: 5 },
    { name: 'Jack', specialty: 'Quantum Separation', awards: 4},
];

//if we wanted to create an array with just those instructors with more than 5 awards it would be time consuming code to write 

//enter filter method 

const instructorNames = instructors.filter(i => i.awards >= 5);
console.log(instructorNames);