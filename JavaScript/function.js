function inipertama () {
    console.log("My First")
}
inipertama()

function multiply(num1, num2) {
    console.log(num1 * num2)
}
multiply(12, 5)

function hello(name = "Otat") {
    console.log("Halo Bang " + name)
}
hello("Idar")
hello()

function calculatethis(p, l) {
    return p * l
}
console.log(calculatethis(5, 6))

let result = calculatethis(4, 8)
console.log(result)

//keyword function
function keywordfunction() {
    console.log("Keyword Function")
}
keywordfunction()

//function expression
let functionexpression = function() {
    console.log("Function Expression")
}
functionexpression()

//arrow function
let arrowfunction = () => {
    console.log("Arrow Function")
}
arrowfunction()