function addNums(num1, num2){
    return num1 + num2;
}

function subNums(num1, num2){
    return num1-num2;
}

function multiplyNums(num1, num2){
    return num1*num2;
}

function divideNums(num1, num2){
    return num1/num2;
}

function powerNums(num1, num2){
    let x = Math.pow(num1,num2);
    return x;
}

const myForm = document.getElementById('my-form');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const btn = document.getElementById('btn');

console.log(operator)

myForm.addEventListener('submit', onsubmit)

function onsubmit(e) {
    e.preventDefault();
    if(operator.value == '+'){
        console.log(addNums(num1.value, num2.value));
    }
    else if(operator.value == '-'){
        console.log(subNums(num1.value, num2.value));
    }
    else if(operator.value == '*'){
        console.log(multiplyNums(num1.value, num2.value));
    }
    else if(operator.value == '/'){
        console.log(divideNums(num1.value, num2.value));
    }
    else if(operator.value == '**'){
        console.log(powerNums(num1.value, num2.value))
    }
    else{
        return 0;
    }
}

