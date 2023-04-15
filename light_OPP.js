// * Create a new object 
const students = function(name, age){
    let student = {
        name: name,
        age: age,
    };
    return student;
}

const student1 = students("John", 20);
const student2 = students("Mary", 21);
console.log(`Student1: ${student1.name}, ${student1.age}`);

const student3 = students("Max", 23);
console.log(student3.age);