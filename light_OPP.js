// * Create a new object 
// const students = function(name, age){
//     let student = {
//         name: name,
//         age: age,
//         birthday: function(){
//             this.age ++;
//         }
//     };
//     return student;
// }

// const birthday = function(student){
//     student.age ++;
// }

// const student1 = students("John", 20);
// const student2 = students("Mary", 21);
// console.log(`Student1: ${student1.name}, ${student1.age}`);

// const student3 = students("Max", 23);
// console.log(student3.age);
// student3.birthday();
// console.log(student3.age);

// * Object construction using this
const students = function(name, age){
    this.name = name;
    this.age = age;
    this.birthday = function(){
        this.age ++;
    }
}

const student1 = new students("Jhon", 20);
const student2 = new students("Mary", 21);
student2.birthday();
console.log(`All students: ${student1.name}, ${student2.name}`);
console.log(student2.age);