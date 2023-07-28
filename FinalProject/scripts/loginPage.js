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

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i=0; i<length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() *charactersLength));

    }
    return result;

}


function login() {
    let username, password, usersData, loginForm, userExists, timeNow, atTime ;
    username = document.getElementById('inputUser').value;
    password = document.getElementById('inputPassword').value;
    usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);
    userExists = false;
    loginForm = document.querySelector('form');
    savepass = document.getElementById('savePass').checked;
    timeNow = new Date();
    timeNow.setTime(timeNow.getTime() + 1 * 24 * 60 * 60 *1000);
    atTime = timeNow.toUTCString();
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].username === username && usersData[user].password === password) {
            let sessionToken = generateString(36);

            if (savePass) {
                document.cookie = `cookieToken=${sessionToken};expires=${atTime};path=/`;
                sessionStorage.setItem('sessionToken', sessionToken);
            } else {
                sessionStorage.setItem('sessionToken', sessionToken);
            };

            usersData[user].sessionToken = sessionToken;
            userExists = true;
        };
    };

    if (userExists) {
        window.location.href = '/loginSuccesful.html'
        
    } else {
        alert("This account doesn't exists!")
    };

    localStorage.setItem('usersData', JSON.parse(usersData));
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
