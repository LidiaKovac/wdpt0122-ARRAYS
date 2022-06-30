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
      isForSale: true,
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

console.log(arrayOfCars[0].status.mileage)
console.log(arrayOfCars[0].status.accidentHistory[0].repairNotes) //NONE
// console.log(arrayOfCars[arrayOfCars.length - 1].status.accidentHistory[0].repairNotes) 
let lastIndex = arrayOfCars.length - 1
console.log(arrayOfCars[lastIndex].status.accidentHistory[0].description) //Replaced


