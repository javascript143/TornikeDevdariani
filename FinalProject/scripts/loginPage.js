function login() {
    var username = document.getElementById("inputUser").value
    var password = document.getElementById("inputPassword").value
    event.preventDefault
        if (username == "sertified" && password == "student") {
            // window.location.href = "/home.html"; 
            window.location.href= "home.html"; alert ("login successful");
        }   else {
            alert ("login failed");
        }
}

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

