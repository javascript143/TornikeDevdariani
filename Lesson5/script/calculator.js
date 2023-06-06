function one() {
    let number1 = document.getElementById("one").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number1;
}

function two() {
    let number2 = document.getElementById("two").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number2;
}

function three() {
    let number3 = document.getElementById("three").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number3;
}

function four() {
    let number4 = document.getElementById("four").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number4;
}

function five() {
    let number5 = document.getElementById("five").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number5;
}

function six() {
    let number6 = document.getElementById("six").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number6;
}

function seven() {
    let number7 = document.getElementById("seven").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number7;
}

function eight() {
    let number8 = document.getElementById("eight").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number8;
}

function nine() {
    let number9 = document.getElementById("nine").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number9;
}
function zero() {
    let number0 = document.getElementById("zero").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    document.getElementById("mainDisplay").value = oldDisplayValue + number0;
}

function plus() {
    let plus = document.getElementById("plus").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;

    if (oldDisplayValue == "") {
        return;
    }
    count = 0;
    for (let char of oldDisplayValue) {
        if (char == "plus") {
            count ++;
        }
    }
    if (count > 0) {
        return;
    }
    document.getElementById("mainDisplay").value = oldDisplayValue + plus;

}

function minus() {
    let minus = document.getElementById("minus").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;

    if (oldDisplayValue == "") {
        return;
    }
    count = 0;
    for (let char of oldDisplayValue) {
        if (char == "minus") {
            count ++;
        }
    }
    if (count > 0) {
        return;
    }
    document.getElementById("mainDisplay").value = oldDisplayValue + minus;

}
function multiply() {
    let multiply = document.getElementById("multiply").innerHTML;
    let oldDisplayValue = document.getElementById("mainDisplay").value;

    if (oldDisplayValue == "") {
        return;
    }
    count = 0;
    for (let char of oldDisplayValue) {
        if (char == "multiply") {
            count ++;
        }
    }
    if (count > 0) {
        return;
    }
    document.getElementById("mainDisplay").value = oldDisplayValue + multiply;

}

function equal(mainDisplay) {
    let oldDisplayValue = document.getElementById("mainDisplay").value;
    if (oldDisplayValue.includes("+")) {
        let numbers = oldDisplayValue.split("+");

        let sum = 0;

        for (let number of numbers) {
            sum = sum + parseInt (number);
        }
        document.getElementById("mainDisplay").value = sum;
    } if (oldDisplayValue.includes("-")) {
        let numbers = oldDisplayValue.split("-");
        let sum = 0;
        for (let number of numbers) {
            sum = -parseInt(number) - sum;
        }
        document.getElementById("mainDisplay").value = sum;

    // } if (oldDisplayValue.includes("*")) {
    //     let numbers = oldDisplayValue.split("*");
    //     let sum = 0 ;
    //     count = 1 ;
    //     for (let number of numbers) {
    //         sum = sum + parseInt(number[0]*number);
    //     }
    //     document.getElementById("mainDisplay").value = sum;

    }
}

