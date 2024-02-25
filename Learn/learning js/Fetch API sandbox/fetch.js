button = document.getElementById('getText')
buttn = document.getElementById('getUsers');
btn = document.getElementById('getPosts');
myForm = document.getElementById('my-Form')


button.addEventListener('click', getText);
buttn.addEventListener('click', getUsers);
btn.addEventListener('click', getPosts);
myForm.addEventListener('submit', onSubmit);

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
                    <li>ID: ${user.id} </li>
                    <li>Name: ${user.name} </li>
                    <li>Email: ${user.email} </li>
                </ul>
            `
        });
        document.getElementById('output').innerHTML = output;
    })
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2> Posts: </h2>';
        data.forEach(function(posts){
            output += `
               <div>
                <h3> ${posts.title} </h3>
                <p> ${posts.body} </p>
               </div>
            `
        });
        document.getElementById('output').innerHTML = output;
    })
}

function onSubmit(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: 'POST',
        headers:{
            'Acept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({title: title, body: body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}