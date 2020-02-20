
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