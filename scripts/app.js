let result = 0;
let calculation = "0";
const addBtn = document.getElementById("btn-add"); 
const subBtn = document.getElementById("btn-subtract"); 
const mulBtn = document.getElementById("btn-multiply"); 
const divideBtn = document.getElementById("btn-divide");
const finalResult = document.getElementById("current-result"); 
const calInputs = document.getElementById("current-calculation");

//to set current result and calculation after each button click event
function displayResult(num, output, event) {
    const operator = event.currentTarget.firstChild.nodeValue;
    const displayResult = finalResult.firstChild;
    displayResult.nodeValue = output.toFixed(2);

    calculation = calculation.concat(` ${operator} ` + num);
    document.getElementById("input-number").value = "";
    calInputs.firstChild.nodeValue = calculation;
}

function add(event) {
    const num = Number.parseFloat(document.getElementById("input-number").value);
    result += num;
    displayResult(num, result, event);
}

function sub(event) {
    const num = Number.parseFloat(document.getElementById("input-number").value);
    result -= num;
    displayResult(num, result,event);
}

function mul(event) {
    const num = Number.parseFloat(document.getElementById("input-number").value);
    result *= num;
    displayResult(num, result,event);
}

function divide(event) {
    const num = Number.parseFloat(document.getElementById("input-number").value);
    num > 0 ? result /= num : alert("Number can't be zero for division, please try with another number");
    displayResult(num, result,event);
}

addBtn.addEventListener("click", add, false);
subBtn.addEventListener("click", sub,false);
mulBtn.addEventListener("click", mul,false);
divideBtn.addEventListener("click", divide,false);