/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let metreToFeet = 3.821
let literToGallon = 0.264
let kilogramToPound = 2.204


let inputEl = document.getElementById("input-section")
let btnEl = document.getElementById("btn")
let lengthEl = document.getElementById("length-text")
let volumeEl = document.getElementById("volume-text")
let massEl = document.getElementById("mass-text")

btnEl.addEventListener("click", function(){
    let conValue = inputEl.value
     lengthEl.textContent = `${conValue} meters = ${(conValue * metreToFeet).toFixed(2)} feet | 
     ${conValue} feet = ${(conValue / metreToFeet).toFixed(2)} meters`
    
     volumeEl.textContent = `${conValue} liters = ${(conValue *literToGallon).toFixed(2)} gallons | 
     ${conValue} gallons = ${(conValue / literToGallon).toFixed(2)} liters`
    
     massEl.textContent = `${conValue} kilograms = ${(conValue *kilogramToPound).toFixed(2)} pounds | ${conValue} pounds = ${(conValue / kilogramToPound).toFixed(2)} kilograms`
})
    // lengthEl.textContent = `${conValue} meters = ${(conValue * metreToFeet).toFixed(2)} feet | 
    // ${conValue} feet = ${(conValue / metreToFeet).toFixed(2)} meters`
