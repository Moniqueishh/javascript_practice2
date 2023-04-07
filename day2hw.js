//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function foods(objects){
    let pizza = person3["pizza"]
    // console.log(pizza)
    let tacos = person3["tacos"]
    let burgers = person3["burgers"]
    let ice_cream = person3["ice_cream"]
    let oshakes = person3["shakes"][0]["oberwise"]
    let dunkin = person3["shakes"][0]["dunkin"]
    let culvers = person3["shakes"][0]["culvers"]
    let mcDonalds = person3["shakes"][0]["mcDonalds"]
    let cupids = person3["shakes"][0]["cupids_candies"]


console.log("Person3s favorite foods include: ")
console.log(`Pizza: ${pizza}`)
console.log(`tacos: ${tacos}`)
console.log(`burgers: ${burgers}`)
console.log(`ice_cream: ${ice_cream}`)
console.log("They LOVE shakes but specific ones from specific places(shown below): ")
console.log(`Oberwise: ${oshakes}`)
console.log(`Dunkin: ${dunkin}`)
console.log(`Culvers: ${culvers}`)
console.log(`McDonalds: ${mcDonalds}`)
console.log(`Cupids Candies: ${cupids}`)

}

foods(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

    // const print_info = (person) => {
    //     return(`This is  ${person["name"]}, they are ${person["age"]} years old`)  
    // }

    // const increase_age = (person) => {
    //         person["age"] = person["age"] + 1
    //         return person["age"]
    // }

class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print_info() {
        console.log(`This is ${this.name}, they are ${this.age} years old`);
    }
    increase_age(){
        this.age = this.age + 1
            return this.age
    }
}

const person2 = new Persons("Mark", 28);
const person4 = new Persons("Ashley", 32);

console.log(person2.print_info)
console.log(person4.increase_age)
console.log(person4.age)



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let checkString = (string) => {
    return new Promise((resolve,reject)=>{
        if (string.length > 10){
            resolve(string);
        } else{
            reject(string);
        }
    })
}

checkString("MY really LongS tring")
.then((result) => {
    console.log("Big word")
}).catch( (result) => {
    console.log("Small Number")
})

// ----------------------------------CODEWARS EXAMPLES-----------------------------------

// Javascript:
function numberToString(num) {
    return num.toString();
  }

// Python:
// def number_to_string(num):
//     return str(num)



// Javascript:
function solution(str){
    return str.split("").reverse().join("");
}



// Python:
// def solution(str):
//   return str[::-1]