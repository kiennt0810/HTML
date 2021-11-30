function sayHello(){
    let nameInput = prompt("Enter your name");
    let p = document.getElementById('name');

    p.textContent = 'Hi ' + nameInput;
}
function varVsLet(){
    console.log(i);
    console.log(j);
    for(var i = 0; i < 3; i++)
    {
        console.log('i ben trong',i);
    }
    console.log('i ben ngoai',i);
    console.log(j);
    for(let j = 0; j < 3; j++)
    {
        console.log('j ben trong', j);
    }
    console.log('j ben ngoai', i);
    console.log('i ben ngoai', j);
}
function demoObject(){
    //vi du ve kieu object
    let person = {
        fullName: 'Nguyen Trung Kien',
        age: 22,
        location: 'Ha Noi'
    }
    console.log(typeof(person));

    //mang
    var students = [
        {fullName: 'Nguyen Trung Kien', age: 22, class: 'PF11'},
        {fullName: 'Nguyen Trung Kien', age: 22, class: 'PF11'},
        {fullName: 'Nguyen Trung Kien', age: 22, class: 'PF11'},
        {fullName: 'Nguyen Trung Kien', age: 22, class: 'PF11'},
        {fullName: 'Nguyen Trung Kien', age: 22, class: 'PF11'},
    ];
    //console.table(students);
    var text = "";
    for(let i =0 ; i < students.length; i++)
    {
        text += "<h1>" + students[i].fullName + "</h1>";
    }
    document.getElementById("body").innerHTML = text;
}
demoObject();