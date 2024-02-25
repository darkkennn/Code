button = document.getElementById('getText');

button.addEventListener('click', getText);
button.addEventListener('click', getUsers);

function getText() {
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    }) 
}

function getUsers() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2> Users: </h2>';
        data.forEach(function(user){
            output += `
                <ul>
                    <li> </li>
                </ul>
            `
        })
    })
}
