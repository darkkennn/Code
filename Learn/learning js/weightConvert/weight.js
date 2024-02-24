function kgConv(weight){
    kg = weight/2.205;
    console.log(kg);
}

function lbConv(weight){
    lb = weight*2.205;
    console.log(lb);
}

const myForm = document.getElementById('my-form');
const weight = document.getElementById('weight');
const unit = document.getElementById('unit');
const btn = document.getElementById('btn');

console.log(myForm);
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(unit.value == 'kg'){
        kgConv(weight.value);
    }
    else if(unit.value == 'lb'){
        lbConv(weight.value);
    }
    else{
        return 0;
    }
}