//task#1
let brands = ["Prada", "Gucci", "YSL", "Tommy", "Givenchy", "Moncler", "Zara", "Bally", "sevasti",];

let thirdbrand = [];
let count = 0;

while(count < brands.length) {
    if (count % 3 == 2) {
        thirdbrand.push(brands[count]);
    }
    count = count + 1
}

console.log(thirdbrand);


//task#2
let number10 = 11

while (number10 > 1) {
    number10 = number10 -1;
    console.log(number10);
}


//task#3

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

names = names.filter(name => name !='Bob', )
console.log(names);

//task#5
for (let i = 1; i <= 100; i = i + 1) {
    if (i % 15 == 0) {
        console.log(i + 'fizzbuzz')
    } else if(i % 3 == 0) {
        console.log(i + 'fizz');
    } else if ( i % 5 == 0) {
        console.log(i + 'buzz')
    }  else {
        console.log(i)
    }
}

//task #7
let phr = "javascript lesson";
console.log(phr.replace('j','J'))

//task #8 
function  blankStringChecker(testString) {
    if(testString.length==0) {
        return "this string is blank";
    } else {
        return "this string is not blank";
    }
}
//task #9
let stringToArray = "Hello, world"
console.log(stringToArray.split(", "));

