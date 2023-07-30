let sessionToken, usersData, message, loggedInUsersData;

sessionToken = sessionStorage.getItem('sessionToken');
usersData = localStorage.getItem('usersData');
usersData = JSON.parse(usersData);
message = document.getElementById('loginMessage');

for (let user of usersData) {
    if (user.sessionToken === sessionToken) {
        loggedInUsersData = user;
    }
    
};


message.innerHTML = `Welcome ${loggedInUsersData.firstName} ${loggedInUsersData.lastName}!`;