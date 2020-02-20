
// Color controls

var redBtn = document.getElementById("great-events")
var greenBtn = document.getElementById("house-music")
 

redBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"
})

greenBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
})


var count = 0;
var subtractBtn = document.getElementById("subtract")
var addBtn = document.getElementById("add")


subtractBtn.addEventListener("click", function() {
    count--
    document.getElementById("counter").innerText = count;
})

addBtn.addEventListener("click", function() {
    count++
    document.getElementById("counter").innerText = count;
})

function seasons(){
    var assets =["winter", "summer", "spring", "fall", "hot", "cold", "warm"]
    for (let i = 0; i < 7; i++ ) {
        console.log("Checking out the weather", assets[i]);
    }
}
seasons()
 document.getElementById("tourbutton").addEventListener("click", checkButton);

function checkButton(){
    const age = 16;
    if(age === 26){
        console.log('Ready for a tour');
    } 
    else {
        console.log('Not ready for a tour');
    }
}

var person = {
    name: "Adam", 
    age: "39",
    hobbies: ["Fishing", "Hicking", "Skiing"]
}

for (let i = 10; i < 100; i++ ) {
    console.log(i)
}