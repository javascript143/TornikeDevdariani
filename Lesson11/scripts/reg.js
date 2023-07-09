function handleRegistration() {
    let firstname, lastname, password, username;
    firstname = document.getElementById('firstname').value;
    lastname = document.getElementById('lastname').value;
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    let oldData = localStorage.getItem('usersData');
    oldData = JSON.parse(oldData);

    let user = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
    };

    if (oldData === null) {
        localStorage.setItem('usersData',JSON.stringify([user]));
    } else {
        oldData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldData));
    }
}