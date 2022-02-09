
let txt = "ABCDEFGHIJKLMNOPQRXTUVWXYZÆØÅ";
let sln = txt.length;
//console.log(sln);


let txt1 = "What a very ";
txt1 += "nice day";
console.log(txt1);



let myStuff = document.querySelectorAll("");
let doesItBubble = event.bubbles;

console.log(event.type);

let listItem;
console.log(listItem.type);


const students = [];

    students.forEach((student) => {

    })
// sort forEach

document.querySelector('ol#ex2').innerHTML = listItem;



console.log("Exercise 3");
const cars = [
    { make: "Ford", model: "Taurus", year: 2005 },
    { make: "Volvo", model: "XC90", year: 2020 },
    { make: "Volvo", model: "XC60", year: 2020 },
    { make: "BMW", model: "M3", year: 2012 },
    { make: "Ford", model: "Escort", year: 2012 },
    { make: "BMW", model: "X1", year: 2020 },
    { make: "BMW", model: "M3", year: 2000 },
    { make: "Ford", model: "Escort", year: 2008 },
    { make: "Ford", model: "Taurus", year: 2018 },
    { make: "Volvo", model: "XC60", year: 2019 }
];

const listCars = (list) => {
    let generatedCode = "";
    let sortedCarList = list.slice().sort(byMakeModelYear);
    for (const car of sortedCarList) {
        generatedCode += `
<div>
<h2>${car.make}</h2>
<p><strong>${car.model}</strong></h2>
<p>${car.year}</p>
</div>
`;
    }
    return generatedCode;
}