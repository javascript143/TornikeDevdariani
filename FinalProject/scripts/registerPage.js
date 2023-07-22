function toggleLogo() {
    var x = document.getElementById("burgermenu");
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
});

class Registration {
    constructor() {
        this.pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        this.patternEmail = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
        this.result = document.getElementById('passP');
        this.usersPass = document.querySelector('#inputPassword');
        this.usersEmail = document.querySelector('#email');
        this.resultEmail = document.getElementById('emailP');
        this.firstName = document.querySelector('#firstName');
        this.lastName = document.querySelector('#lastName');
        this.username = document.querySelector('#inputUser');
        this.oldUsersData = localStorage.getItem('usersData');
        this.oldUsersData = JSON.parse(this.oldUsersData);

        

    }

    passwordChecker() {
        const password = this.usersPass.value;

        if (this.pattern.test(password)) {
            this.result.style.color = 'green';
            this.result.innerHTML = 'Password is valid';
        } else {
            this.result.innerHTML = 'Password must contain at least 8 characrets, uppercase!'
        }
    }
    emailChecker() {
        const email = this.usersEmail.value;

        if (this.patternEmail.test(email)) {
            this.resultEmail.innerHTML = 'Email is valid';
            
        } else {
            this.resultEmail.style.color = 'red';
            this.resultEmail.innerHTML = 'Email is invalid, please try another';
        }

    }

    
};

function register() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('inputUser').value;
    let password = document.getElementById('inputPassword').value;
    let agree = document.getElementById('agree').checked;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);

    let user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
    }
    

    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
        alert('Congratulations, your account has been successfully created.');
    } else {
        oldUsersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldUsersData));
        alert('This account allready exists!')
    }
}

const registration = new Registration();
form.addEventListener('change', (event) => {
    event.preventDefault();
    registration.passwordChecker();
    registration.emailChecker();
});