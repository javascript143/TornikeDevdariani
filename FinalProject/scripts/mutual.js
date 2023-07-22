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

function filter() {
    let input, filter, ul, li, a, i, txtValue;

    input= document.getElementById('searchLoc');
    filter = input.value.toUpperCase();
    ul = document.getElementById('locations')
    li = ul.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) { 
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"; 
        }
    }
}

