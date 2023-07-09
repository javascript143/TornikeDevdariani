let sessionToken, usersData, welcomeMessage, loggedInUserData;

sessionToken = sessionStorage.getItem('sessionToken');
usersData = localStorage('usersData');
usersData= JSON.parse(usersData);
welcomeMessage = document.createElement('h1')

loggedInUserData = {};

for (let user of usersData) {
    if (user.sessionStorage === sessionToken) {
        loggedInUserData = user
    } 
} ;
if (Object.keys (loggedInUserData).length === 0) {
    alert('Please log in');
};

welcomeMessage.innerHTML = `Welcome ${loggedInUserData.firstname}!`
document.body.appendChild(welcomeMessage);

