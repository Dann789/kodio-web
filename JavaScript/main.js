// console.log("Hello World Eksternal")

// Type of Variable

// var varVariable 
// console.log(varVariable)
// var varVariable = "Hello from Me below"
// console.log(varVariable)
// var varVariable = "Hello again:)"
// console.log(varVariable)

// let letVariable = "Hello, this is let"
// console.log(letVariable)
// letVariable = "Hello again"
// console.log(letVariable)

// const constVariable = "Hello, it's me"
// console.log(constVariable)
// const constVariable = "Hello form below"

// Data Type

// let undefinedValue
// console.log(undefinedValue)

// let nullValue = null
// console.log(nullValue)

// let numberValue = 20
// console.log(typeof numberValue)

// let stringValue = "Hi bro"
// console.log(typeof stringValue)

// let booleanValue = true
// console.log(booleanValue)
// booleanValue = false
// console.log(typeof booleanValue)

// let objectValue = {
//     key: "value", 
//     b: 5
// }
// console.log(typeof objectValue)
// console.log(typeof objectValue.b)

// Arithmatic Operators
// let num1 = 2, num2 = 3, num3 = 5

// +
// console.log(11 + 9)
// console.log(num1 + num2)

// -
// console.log(11 - 5)
// console.log(num3 - num1)

// *
// console.log(20 * 5)
// console.log(num3 * num2)

// : atau /
// console.log(20 / 5)
// console.log(num3 / num2)

// **
// console.log(3 ** 4)
// console.log(num1 ** num3)

// %
// console.log(21 % 4)
// console.log(num3 % num2)

// ++
// console.log(num2++) //Tampilkan dulu baru ditambah
// console.log(num2) //Tampilkan hasil tambah
// console.log(++num2) //tambah dulu baru tampilkan

// -- (Keterangan sama seperti yang diatasnya, ++)
// console.log(num1--)
// console.log(num1)
// console.log(--num1)

// num1 += num3 //num1 = num1 + num3
// console.log(num1)

// num3 -= num2 //num3 = num3 - num2
// console.log(num3)

// num3 **= num1
// console.log(num3)

// let num1 = 50, num2 = 10
// console.log("Belajar Conditional")

// if(num1 < num2) {
//     console.log("Kondisi if pertama benar")
// } else if(num1 == num2) {
//     console.log("if else benar")
// } else {
//     console.log("Semua if salah")
// }

// let akun_ml = 10
// let teman = 4
// function testing2() {
//     for(let i = 0; i <= akun_ml; i++) {
//         if(i == 0) {
//             console.log("Nol doang")
//         }
//         else if(i%2 == 0) {
//             console.log("Ini genap", i)
//         } else {
//             console.log("Ini ganjil", i)
//         }
//     }
// }

// function tambah(angka1, angka2) {
//     return angka1 + angka2
// }
// function kurang(angka1, angka2) {
//     return angka1 - angka2
// }
// function kali(angka1, angka2) {
//     return angka1 * angka2
// }
// function bagi(angka1, angka2) {
//     return angka1 / angka2
// }

// function calculate(angka1, angka2, arg) {
//     switch(arg) {
//         case 'tambah':
//             return tambah(angka1, angka2)
//         case 'kurang':
//             return kurang(angka1, angka2)
//         case 'kali':
//             return kali(angka1, angka2)
//         case 'bagi':
//             return bagi(angka1, angka2)
//     }
// }

// let var1 = "20" , var2 = "20"

// if(var1 == var2) {
//     console.log("If 1 benar")
// }
// if(var1 === var2) {
//     console.log("If 2 benar")
// } else {
//     console.log("If 2 salah")
// }

// if (var1 != var2) {
//     console.log("If 1 benar")
// } else if(var1 !== var2) {
//     console.log("Yang kedua benar")
// } else {
//     console.log("beda semua")
// }

// let var3 = 10, var4 = 11

// if(var3 >= var4) {
//     console.log("If 1 benar")
// } else if (var3 <= var4) {
//     console.log("If 2 benar")
// } else {
//     console.log("beda bg")
// }

let var1 = 20, var2 = 35, var3 = 50
if(var2 > var1) {
    console.log("Benar ini")
}
if(var2 > var3 || var2 < var1) {
    console.log("var2 diantara var1 dan var3")
}
