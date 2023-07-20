let sessionToken, usersData, message, loggedInUsersData;

sessionToken = sessionStorage.getItem('sessionToken');
usersData = localStorage.getItem('usersData');
usersData = JSON.parse(usersData);
message = document.getElementById('loginMessage');
loggedInUsersData = {};

for (let user of usersData) {
    if (user.sessionToken === sessionToken) {
        loggedInUsersData = user;
    }
    
};

if (Object.keys(loggedInUsersData).length === 0) {
    alert('please log in');
    window.location.href = '/login.html';
};

message.innerHTML = `Welcome ${loggedInUsersData.firstName} ${loggedInUsersData.lastName}!`;