// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// PSEUDOCODE:
// input: a string that takes in a word
// output: a new string with the word converted into a new word

// process:
// delcare a function called "wordDecoder"
// after declaring function, give it the parameter of "string"
// create a for loop to iterate each letter
// referring to the resource, using switch statements, create a case for each letter aeio, to convert to 4310
// create an additional switch statement to account for the capitalized letter of "E" to also convert to 3

// references/resources:
// https://www.w3schools.com/js/js_switch.asp
// a) Create a test with expect statements using the variables provided.

// RED:
describe("wordDecoder", () => {
    it("takes a string and decodes the message", () =>{
        expect(wordDecoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(wordDecoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(wordDecoder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// GREEN:
const wordDecoder = (string) => {
    let letterDecoded = ""
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
                letterDecoded += "4"
                break
            case "e":
                letterDecoded += "3"
                break
            case "i":
                letterDecoded += "1"
                break
            case "o":
                letterDecoded += "0"
                break
            case "E":
                letterDecoded += "3"
                break
            default:
                letterDecoded += string[i]
        }
    }
    return letterDecoded
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// PSEUDOCODE:
// input: an array of words 
// output: a new array of words returned with all the words containing a specific, single letter

// process:
// declare a function called "containsLetter"
// after declaring function, pass it two parameters to account for the array being passed in, and the specific letter. I used "array" and "letter"
// return the statement using the .filter() method to return a new array with specifications to include only words where that letter appear
// account for upper cased letters by using .toLowerCase() method, then use .include() method to specify letter variable


// a) Create a test with expects statement using the variable provided.

// RED:
describe("containsLetter", () => {
    it("takes a letter and returns an array with all words containing specific letter", () => {
        expect(containsLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(containsLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// GREEN:
const containsLetter = (array, letter) => {
 return array.filter((array) => array.toLowerCase().includes(letter))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// PSEUDOCODE:
// input: an array of five numbers
// output: a boolean value of true or false, letting us know if the given array is a full house or not

// process:
// declare a variable called "fullHouse"
// after declaring variable, pass it the parameter of "numbers"
// create an empty variable called "numCounts" to take in value of for loop
// create a for loop to cycle through given number in the array
// create two new variables called "twoOfAKind" and "threeofAKind" and set to false
// create another for loop to cycle and see if those numbers strictly equal 3 or 2, if yes, set those variables to true
// return the statement telling it to only return if the boolean value "true" for both variables of "twoOfAKind" and "threeOfAKind" using the && operator to account for both conditions

// references/resources:
// https://stackoverflow.com/questions/59510349/how-to-recognise-full-house-and-two-pair-in-a-javascript-poker-game

// a) Create a test with expect statements using the variable provided.
// RED:
describe("fullHouse", () => {
    it("takes in five numbers and determines if there is a full house", () =>{
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

//GREEN:
const fullHouse = (numbers) => {
    let numCounts = {}
    for (let i = 0; i < numbers.length; i++) {
        if (numCounts[numbers[i]]) {
            numCounts[numbers[i]]++
        } else {
            numCounts[numbers[i]] = 1
        }
    }
    let threeOfAKind = false;
    let twoOfAKind = false;
    for (let num in numCounts) {
      if (numCounts[num] === 3) {
        threeOfAKind = true;
      } else if (numCounts[num] === 2) {
        twoOfAKind = true;
      }
    }
    return threeOfAKind && twoOfAKind;
  }
