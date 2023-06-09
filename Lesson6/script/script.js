let foods = document.getElementById("food").value;
food = foods.split(", ");

let healthyfood = foods.filter(function(food) {
    if(food === "სუში,", "წიწიბურა") {
        return true;
    } else {
        return false;
    }
    } 

)
console.log(healthyfood);


