// querySelector
// Selecting a single element from the html. (Will return to first element it finds that matches the query)

// var result = document.querySelectorAll(".sign")
var result = document.querySelectorAll("ol#signs > li")
console.log(result)

for (var i = 0; i< result.length; i++) {
    result[i].textContent = "** FUNKY **"
}