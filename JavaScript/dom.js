// let el = document.getElementById("div-1")
// let el = document.getElementsByTagName("div")
// let el = document.getElementsByClassName("div-2")

// Query Selector
// let el = document.querySelector("#div-1")
// let el = document.querySelector("div")
// let el = document.querySelector(".div-2")
// console.log(el)

// set html content
// el.innerHTML = "<p>Hello World</p>"

// Change Attribute
// let input = document.getElementById("input")
// console.log(input)

// input.setAttribute("type", "checkbox")

// Change Style
// let input = document.getElementById("input")
// input.style.borderColor = "red"
// input.style.color = "blue"

// //Create and Delete
// const pElemenet = document.createElement("p")
// const divEl = document.getElementById("div-1")

// divEl.appendChild(pElemenet)
// pElemenet.innerHTML = "Hello, this is me"

// divEl.removeChild(pElemenet)

// Muncul border red
const hello = document.getElementById("hello")
hello.addEventListener("mouseenter", function() {
    // console.log("Mouse Enter Hello world text")
    hello.style.border = "1px solid red"
})

// // Muncul tulisan boom
// const btn = document.getElementById("btn")
// btn.addEventListener("click", function() {
//     const boom = document.getElementById("boom")
//     boom.style.display = "block"
// })

// Muncul tulisan boom dengan dipanggil lewat html
function showBoom() {
    const boom = document.getElementById("boom")
    boom.style.display = "block"
}

// ada this pada fungsi di html
function addBorder(el) {
    el.style.border = "1px solid blue"
}