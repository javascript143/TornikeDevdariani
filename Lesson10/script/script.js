function toggleLogo() {
    let x = document.getElementById("burgermenu");
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

function SearchInput() {
    let x, filter, ul, li,  a, i ;
    x = document.getElementById("searchButton");
    input = document.getElementById("searchHolder")
    filter = input.value.toUpperCase();
    ul.getElementById("ordercars");
    li.getElementsByTagName("li")
    for (i = 0; i < li.length; i++) { 
        a = li[i].getElementByclass("model")[0];
        txtValue = a.textContent || a.innerText; // giorgi
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"; 
        }
    };
    if (x.style.display == "none") {
        x.style.display = "none"
    } else {
        x.style.display = "inline-flex"
    }

}