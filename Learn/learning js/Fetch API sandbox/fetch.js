button = document.getElementById('getText');

button.addEventListener('click', getText);

function getText() {
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => console.log(data)) 
}

