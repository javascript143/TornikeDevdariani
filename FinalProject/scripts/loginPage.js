function toggleLogo() {
    var x = document.getElementById("burgermenu");
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

function SearchLogo() {
    var x = document.getElementById("searchButton");
    if (x.style.display == "none") {
        x.style.display = "none"
    } else {
        x.style.display = "inline-flex"
    }
}
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generatesrting(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i=0; i<length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() *charactersLength));

    }
    return result;

}


function login() {
    let username, password, usersData, loginForm, userExists, timeNow, atTime ;
    username = document.querySelector('#inputUser').value;
    password = document.querySelector('#inputPassword').value;
    usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);
    userExists = false;
    loginForm = document.querySelector('form');
    savepass = document.getElementById('savePass').checked;
    atTime = timeNow.toUTCString();
    timeNow = new Date();
    timeNow.setTime(timeNow.getTime() + 1 * 24 * 60 * 60 *1000);


    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].username === username & usersData[user].password === password) {
            let sessionToken = generatesrting(36);
            sessionStorage.setItem('sessionToken', sessionToken);
            if (savepass) {
                document.cookie = `sessionToken=${sessionToken};expires=${atTime};path=/`
            }
            usersData[user].sessionToken = sessionToken;
            userExists = true;

        }
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });

    if (userExists === false) {
        alert("This account doesn't exists!")
    } else {
        window.location.href = '/loginSuccesful.html'
    }

    localStorage.setItem('usersData', JSON.stringify(usersData));
}
// class LoginClass {

//     constructor(){
//         this.loginForm = document.querySelector('form');
//         this.savePassword = document.querySelector('#savePass');
//         this.result = '';
//         this.username = document.getElementById('inputUser').value;
//         this.password = document.getElementById('inputPassword').value;
//         this.usersData = localStorage.getItem('usersData');
//         this.userExists = false;
//         this.timenow = new Date();
//         this.atTime = this.timenow.toUTCString();
//         this.charactersLength = characters.length;
//         this.sessionToken = this.generateString(36);
//     }
    
    
//     login() {
//         this.loginForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//         })
//     };
//     generatesrting(length) {
//         for (let i = 0; i < length; i++) {
//             this.result = this.result + this.charactersLength.charAt(Math.floor(Math.random() * this.charactersLength));
//         }
    
//         this.timenow.setTime(this.timenow.getTime()+ 6*24*60*60*1000);
    
//         for (let user = 0; user < this.usersData.length; user++) {
//             if (this.usersData[user].username === this.username && this.usersData[user].password === this.password) {
//                 if(this.savePassword) {
//                     document.cookie = `sessionToken = ${sessionToken}; expires=${this.atTime};`
//                 } else {
//                     sessionStorage.setItem('sessionToken', sessionToken);
//                 }

//                 this.usersData[user].sessionToken = sessionToken;
//                 this.userExists = true;
//             }
//         };    
//         this.loginForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//         });
        
        
//         if (!this.userExists) {
//             window.location.href = 'loginSuccesful.html';
//         } else {
//             alert ("Log in Failed!")
//         }
//         localStorage.setItem('usersData', JSON.stringify(this.usersData));
//     };    
        
// }
