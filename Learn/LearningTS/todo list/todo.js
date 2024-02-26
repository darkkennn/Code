var span = document.getElementById('span');
const myForm = document.getElementById('my-form');
const msg = document.getElementById('msg');
const date = document.getElementById('date');
const task = document.getElementById('task');
const list = document.getElementById('list');
const btn = document.getElementById('btn');
const button = document.getElementById('button');

function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

btn.addEventListener('click', onClick)

function onClick(e){
    e.preventDefault();

    if(date.value == '' || task.value ==''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(),3000)
    }
    else{
        const li =  document.createElement('li');
        li.appendChild(document.createTextNode(`${task.value} : ${date.value}`));

        list.appendChild(li);

        button.addEventListener('click', onPress);
        
        ul = document.getElementById('ul');

        function onPress(e){
        e.preventDefault();


        // figure out a way to remove only one element
        // inherit the button position to the new list element after
        li.removeChild(li.lastChild)
     }

        //resetting the values
        date.value = '';
        task.value = '';
    }
}