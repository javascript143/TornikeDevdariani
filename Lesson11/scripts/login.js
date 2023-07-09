const characters = 'SDAIDHFBCHSKALFOEHANDOASEUidnvhzisoawjrhcuoblasudeoa0123456789';

function generateString() {
    let result = '';
    const characterslength = characters.length

    for (let i = 0; i< length; i++) {
        result = result + characters.length(Math.floor(Math.random() * characterslength));
    }

    return result;
}

function login() {
    let username, password, usersData, userExsists, loginForm;

    username = document.getElementById('inputUser').value;
    password = document.getElementById('inputPassword').value;

    usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    userExsists = false;

    loginForm = document.querySelector('form');

    for(let user= 0; user < usersData.length; user++) {
        if (usersData[user].username === username && usersData[user].password === password) {
            let sessionToken = generateString(35);
            sessionStorage.setItem('sessionToken', sessionToken);
            usersData[user].sessionToken = sessionToken;
            userExsists= true
        }
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
    })

    if (userExsists === false) {
        alert('username or password is incorect');
    } else {
       
        window.location.href = 'succesful.html';
    }
    localStorage.setItem('usersDatra', JSON.parse(usersData));
}