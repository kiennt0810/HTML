// let str = "kien";
// let sayHello = "hello" + str;
// let newSayHello = `Hello ${str}`;
// console.log(newSayHello);

// let x = "Nguyen Trung Kien"; // kieu string
// let y = new String('Nguyen Trung Kien'); //kieu object

// // console.log(x === y); //toan tu so sanh ca gia tri va kieu du lieu

// console.log(x.indexOf('T'));
// console.log(x.lastIndexOf('e'));

// Math.PI;
// console.log(Math.PI);

// let x = Math.floor(Math.random() * 101); 

// console.log(x);

// let newDate = new Date();
// console.log(newDate.toLocaleDateString());

// let currentDate = new Date();

// console.log('Date: ', currentDate.getDate()); //so ngay cua thang
// console.log('Day: ', currentDate.getDay()); //ngay trong tuan

// let firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() + 1));

// console.log(firstDayOfWeek);

class Animal {
    constructor(name){
        this.name = name;
    }
    move (){
        console.log('Moving...');
    }
}

let cat = new Animal("hello");
cat.move();

// var student = class{    // khai bao class student

//  }

// var student = class newStudent {   khai bao class newStudent

// }


class People{                    //ke thua`

}

class Student extends People{

    learn(){
        console.log('Learning..');
    }
    static run(){
        console.log('run...');
    }
}
let std1 = new Student;
std1.learn();
console.log(std1);

Student.run();