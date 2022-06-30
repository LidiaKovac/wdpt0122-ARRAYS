let arrayOfStudents = ["Lidia", "Pierdomenico", "Ali", "Stephanie"]
//log some names
//                        0           1           2         3
console.log(arrayOfStudents[3])
console.log(arrayOfStudents[0])

// "strings".toLowerCase() => METHOD

let userInput = "Umar"
arrayOfStudents.push(userInput)

console.log(arrayOfStudents[4])

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(matrix[0]) //[1,2,3]
console.log(matrix[0][0]) // 1
console.log(matrix[2][1]) // 8

const arrayOfPoems = [
  {
    author: "Edith",
    title: "Mystery.",
    text: "I was playing in the / streets but / then I lost my toy",
    source: [
      "Book of poetry",
      "Literature for dummies",
      "Literary programmers",
    ],
  },
  {
    author: "Mary",
    title: "I was a Tree",
    text: "The tree had / three branches",
    source: [
      "Book of poetry",
      "Literature for dummies",
      "Literary programmers",
    ],
  },
  {
    author: "John",
    title: "The day is over",
    text: "The moon is rising and the streets / are empty",
    source: [
      "Book of poetry",
      "Literature for dummies",
      "Literary programmers",
    ],
  },
  {
    author: "Sebastian",
    title: "Okay",
    text: "You are saying 'okay', but it's not okay",
    source: [
      "Book of poetry",
      "Literature for dummies",
      "Literary programmers",
    ],
  },
]

console.log(arrayOfPoems[0].title) //Mystery
console.log(arrayOfPoems[0].source) // ["Book of poetry","Literature for dummies","Literary programmers"]
console.log(arrayOfPoems[0].source[1]) // "Literature for dummies"

console.log(arrayOfPoems.length) //starts counting at 1!!!!
console.log(arrayOfPoems[arrayOfPoems.length - 1]) //LAST ELEMENT OF ARRAY
console.log(arrayOfPoems[arrayOfPoems.length - 1].source[0]) //Book of poetry

const arrayOfCars = [
  {
    brand: "Ford",
    model: "Explorer",
    licensePlate: "SFE534",
    status: {
      isUsed: true,
      isForSale: true,
      mileage: 83504,
      accidentHistory: [
        {
          description: "Stolen",
          isTotaled: false,
          repairNotes: "NONE",
        },
      ],
    },
  },
  {
    brand: "Mercedes Benz",
    model: "James Cook",
    licensePlate: "DS56879",
    status: {
      isUsed: true, 
      isForSale: true,
      mileage: 23444,
      accidentHistory: [
        {
          description: "Fire",
          isTotaled: true,
          repairNotes: "Sent to junkyard", 
        },
      ],
    },
  },
  {
    brand: "Kia",
    model: "Ceed", 
    licensePlate: "SFE534",
    status: {
      isUsed: true,
      isForSale: true,
      mileage: 12435,
      accidentHistory: [],
    },
  },
  {
    brand: "Tesla",
    model: "Model S",
    licensePlate: "SW85933",
    status: {
      isUsed: true, 
      isForSale: true, //target
      mileage: 83504,
      accidentHistory: [
        {
          description: "Charging plug ripped away", 
          isTotaled: false,
          repairNotes: "Replaced",
        },
      ],
    },
  },
]

console.log(arrayOfCars[arrayOfCars.length - 1].status.isForSale)
console.log(arrayOfCars[1].status.accidentHistory[0].repairNotes)
console.log(arrayOfCars[1].status.isUsed) // true
console.log(arrayOfCars[0].status.mileage)
console.log(arrayOfCars[0].status.accidentHistory[0].repairNotes) //NONE
// console.log(arrayOfCars[arrayOfCars.length - 1].status.accidentHistory[0].repairNotes) 
let lastIndex = arrayOfCars.length - 1
console.log(arrayOfCars[lastIndex].status.accidentHistory[0].description) //Replaced
console.log(arrayOfCars[2].status.mileage)
console.log(arrayOfCars[lastIndex].status.accidentHistory[0].description)


let arrayOfNumbers = [3,4,6,7,2,4,-7]
console.log(arrayOfNumbers);

// array.push(6,7) - Adds elements to the end of array, and returns its new length
// arrayOfNumbers.push(34, 89, "Hello World") //possible, but wrong
arrayOfNumbers.push(34, 89)
console.log("Push:", arrayOfNumbers);


// array.concat(val1, val2, …) - copies multiple arrays / values into a single array
let newArrayOfNumbers = arrayOfNumbers.concat(45,67)
console.log("Concat:", newArrayOfNumbers);

// array.indexOf(2) - returns index of an element or -1 if it is not there
let indexOf4 = newArrayOfNumbers.indexOf(4) //1
let indexOf7 = newArrayOfNumbers.indexOf(7) //3
let indexOfM7 = newArrayOfNumbers.indexOf(-7) // 6
let indexOf22 = newArrayOfNumbers.indexOf(22) //-1 === NOT FOUND

console.log("4 is first found at:", indexOf4, "\n7 is first found at:", indexOf7, "\n22 is first found at:", indexOf22);

// array.lastIndexOf(1) - returns last index of an element or -1 if it is not there
let lastIndexOf4 = newArrayOfNumbers.lastIndexOf(4) //5
let lastIndexOf7 = newArrayOfNumbers.lastIndexOf(7) //3
let lastIndexOfM7 = newArrayOfNumbers.lastIndexOf(-7) // 6
let lastIndexOf22 = newArrayOfNumbers.lastIndexOf(22) // -1 === NOT FOUND
console.log("4 is last found at:", lastIndexOf4, "\n7 is last found at:", lastIndexOf7, "\n22 is last found at:", lastIndexOf22);

// array.pop() - Removes the last element of an array, and returns that element
console.log("Before the pop", newArrayOfNumbers);
newArrayOfNumbers.pop() 
console.log("After the pop", newArrayOfNumbers);

// array.slice(-6, 5) - Selects part of an array, starting and ending at a certain index
let firstThree = newArrayOfNumbers.slice(0, 3) //the first three elements of the array
console.log(firstThree);
let fromFive = newArrayOfNumbers.slice(5) //everything from index 5 to the end
console.log(fromFive);

let firstPart = newArrayOfNumbers.slice(0,3)
let secondPart = newArrayOfNumbers.slice(4)
let newArray = firstPart.concat(secondPart)
console.log(newArray);

// array.includes(2) - returns true if element is in array, false otherwise
let is34There = newArrayOfNumbers.includes(34)
console.log(is34There) //true
let is90There = newArrayOfNumbers.includes(90)
console.log(is90There); //false

if(newArrayOfNumbers.includes(90)) {
  console.log("90 is home!")
} else {
  console.log("90 is not home!")
}

// array.join(‘,’) - returns a string of combined array elements divided by delimiter

let arrayOfStrings = ["Hello", "Johnatan", "how", "are", "you", "doing?"]
let completeString = arrayOfStrings.join("☺☻")
console.log(completeString);

// for(let i = 0; i < 10; i++) {

// }
let numbers= [45,22,93,14,500]

// console.log(numbers[0] * 2)
// console.log(numbers[1] * 2)
// console.log(numbers[2] * 2)
// console.log(numbers[3] * 2)


for(let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] / 2
  //1. i = 0 => numbers[0] || i++
  //2. i = 1 => numbers[1] || i++
  //3. i = 2 => numbers[2] .................
}

console.log(numbers)

const arrayOfPoems2 = [
  {
    author: "Edith",
    title: "Mystery.",
    text: "I was playing in the / streets but / then I lost my toy",
    source: [
      "Book of poetry",
      "Literature for dummies",
      "Literary programmers",
    ],
  },
  {
    author: "Mary",
    title: "I was a Tree",
    text: "The tree had / three branches",
    source: [
      "Book of poetry",
      "Literature for dummies",
      "Literary programmers",
    ],
  },
  {
    author: "John",
    title: "The day is over",
    text: "The moon is rising and the streets / are empty",
    source: [
      "Book of poetry",
      "Literature for dummies",
      "Literary programmers",
    ],
  },
  {
    author: "Sebastian",
    title: "Okay",
    text: "You are saying 'okay', but it's not okay",
    source: [
      "Book of poetry",
      "Literature for dummies",
      "Literary programmers",
    ],
  },
]

for(let i = 0; i < arrayOfPoems2.length; i++) {
  //to print all the titles of the poems
  console.log(arrayOfPoems2[i].title)
}

for(let i = 0; i < arrayOfPoems2.length; i++) {
  console.log(arrayOfPoems2[i].source[0])
}