const display = document.getElementById("display");
let r=""
function appendToDisplay(input){
    display.value += input;
    r=display.value
}

function clearDisplay(){
    display.value="";
}

function result(){
    display.value = eval(display.value);
    r=display.value
}