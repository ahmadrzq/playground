// * Create a new object 
const students = function(name, age){
    let student = {
        name: name,
        age: age,
        birthday: function(){
            this.age ++;
        }
    };
    return student;
}

// const birthday = function(student){
//     student.age ++;
// }

const student1 = students("John", 20);
const student2 = students("Mary", 21);
console.log(`Student1: ${student1.name}, ${student1.age}`);

const student3 = students("Max", 23);
console.log(student3.age);
student3.birthday();
console.log(student3.age);