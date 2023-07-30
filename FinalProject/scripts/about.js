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