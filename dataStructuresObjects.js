// const a = [
//   ["Mary", 10],
//   ["Barbara", 11],
//   ["David", 12],
//   ["Alex", 11],
// ];
// console.log(a[1][1]);

// var students = [
//   //insert your code here
// ];

// for (let i = 0; i < a.length; i++) {
//   students.push({ name: a[i][0], age: a[i][1] });
// }
// console.log(students);

// var student = {
//     name: "Mary",
//     age: 10,
//     grades: [90, 88, 95],
// };

// for (property in student) {
//   console.log(property+":"+student[property]);
// }

var students = [
  {
    name: "Mary",
    age: 10,
    grades: [90, 88, 95],
  },
  {
    name: "Joseph",
    age: 11,
    grades: [80, 100, 90, 96],
  },
];

let getAverages = function (students) {
  let averages = [];
  //* Using basic for loop
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    for (let j = 0; j < students[i].grades.length; j++) {
      sum += students[i].grades[j];
    }
    averages.push(sum / students[i].grades.length);
  }
  //* Using for in loop
  for (let i in students) {
    let sum = 0;
    for (let j in students[i].grades) {
      sum += students[i].grades[j];
    }
    averages.push(sum / students[i].grades.length);
  }
  //* Using for of loop
  for (let i of students) {
    let sum = 0;
    for (let j of i.grades) {
      sum += j;
    }
    averages.push(sum / i.grades.length);
  }
  console.log(averages[0]);
  return averages;
};

console.log(
  `Grades average of ${students[0].name} is ${getAverages(students)[0]}`
);

// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   for (let j = i; j < students[i].grades.length; j++) {
//     sum += students[i].grades[j];
//   }
// }
// console.log(sum);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(`Average is ${sum/array.length}`);
