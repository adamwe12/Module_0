var button = document.getElementById("button")

function handleButtonClick() {
    console.log("The button was clicked!") 
}

button.addEventListener("click", handleButtonClick)

document.getElementById("header").addEventListener("dblclick, function() {
    console.log("The header was double clicked!")
}) 