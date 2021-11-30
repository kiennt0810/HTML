let listStudent = [
    { name: 'nguyen trung kien', age: 22, address: 'ha noi' },
    { name: 'nguyen trung kien', age: 22, address: 'ha noi' },
    { name: 'nguyen trung kien', age: 22, address: 'ha noi' },
    { name: 'nguyen trung kien', age: 22, address: 'ha noi' },
    { name: 'nguyen trung kien', age: 22, address: 'ha noi' }
]

let listStudent1 = [
    { name: 'a', age: 22, address: 'ha noi' }, //object
    { name: 'b', age: 23, address: 'ha noi' },
    { name: 'c', age: 24, address: 'ha noi' },
    { name: 'd', age: 25, address: 'ha noi' },
    { name: 'e', age: 26, address: 'ha noi' }
]

console.log(listStudent);
console.log(listStudent1);

// Arrow function
// let newListStudents = listStudent.map((std) => {
//     let newStudent = {
//         name: std.name.toUpperCase(),
//         age: std.age + 10,
//         address: std.address.toUpperCase()
//     };
//     return newStudent;
// });
// console.log(newListStudents);

let ListAllStudent = [...listStudent1, ...listStudent]; //Spread Operator (...)

console.log(ListAllStudent);
let newListStudents = listStudent.map((std) =>{
    let newStudent = {
        ...std,
        email: 'ngkien2468@gmail.com'
    };
    return newStudent;
});

console.log(newListStudents);

let std = listStudent.find(std => std.age === 22); //tra ra 1 ket qua
console.log(std);

console.log(listStudent1.filter(std => std.age > 24)); //tra nhieu ket qua

listStudent.concat()