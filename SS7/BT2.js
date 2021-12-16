function multiplyBy()
{
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
    if (num2 == 0) {
        alert("Không thể chia cho 0!");
    }
}

function addBy() 
{ 
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);
    let sum = parseInt(num1) + num2;
    document.getElementById("result").innerHTML = sum;
}

function subBy() 
{ 
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}