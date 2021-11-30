
function onChangeText() {
    let textValue = document.getElementById('input-text').value;
   // console.log(textValue);

    let divDemo = document.getElementById('demo');

    divDemo.innerHTML = "<h1>"+ textValue +"<h1>";
}