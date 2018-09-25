console.log("loop")


const arr = [
  { 
    name: "charlotte",
    role: "student"
  },
  { 
    name: "chris l",
    role: "student"
  },
  { 
    name: "chris r",
    role: "student"
  },
  { 
    name: "greg",
    role: "student"
  },
  { 
    name: "andy",
    role: "student"
  },
  { 
    name: "john",
    role: "student"
  },
  { 
    name: "ashley",
    role: "student"
  },
  { 
    name: "josh",
    role: "student"
  },
  { 
    name: "filip",
    role: "student"
  },
  { 
    name: "reuben",
    role: "teacher"
  }
]

console.log(arr[three()], "<--greg")

const whichStudent = 6;

console.log(arr[three() + three()], "<-- ashley")
console.log(arr[whichStudent], "<-- ashley")


for(let i = 0; i < arr.length; i++) {

  // arr[i] is whatever member of the class i happens to be
  console.log(arr[i])

}


function three() {
  return 3
}
console.log(three())

//Beginning homework
// Problem one

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// problem two

for (let i = 0; i <= 200; i+=2) {
  console.log(i);
}

// problem three
const everyCatEver = "Love me, pet me! HSSSSSS!"
const catArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

// log 20 times string 1 in the array
for (let i = 0; i <= 20; i++) {
    console.log(everyCatEver)
    if(i % 2 ===0) {
      //For every even number in the loop, log a random string from array except 0 
    // The below is the math being assigned to a variable. The floor is for making the random number an integer instead of decimals. It's always rounding it down. the random math part x the length of the array limits the numbers to 1-3, technically 0-2.9. Don't want true three, because otherwise it would try to access something in the array that doesn't exist
      let randomIndex = Math.floor(Math.random() * catArray.length)
      //we then take the variable, which has the math, and ask the array to give us back what the number (whatever the variable's math generated) and give that string back to us
      console.log(catArray[randomIndex])

    }
      
}


//Write a javascript application that logs all numbers from 1 - 100.
for (let i = 1; i <= 100; i++) {
  // If a number is divisible by 3 log "Fizz" instead of the number.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  }
  else if (i % 3 === 0) {
    console.log('Fizz')
  }
  // If a number is divisible by 5 log "Buzz" instead of the number.
  else if (i % 5 === 0) {
    console.log('Buzz')
  }
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

  else {
    console.log(i);
  }
}

const shahzad = ["Shahzad", 1000, "Austin"];
let jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//1. Replace Shahzad with Gameboy
shahzad[0] = "GameBoy";
//2. Age Daniel
daniel[1]++;
//3. Ryan hometown from denver to gotham city
ryan[2] = "Gotham City";
//4. Reuben left Durham for chicago. Remove Durham, then add chicago
reuben.pop();
reuben.push("Chicago");
//5. Remove All cities from array.
//slice takes a subset of the first array, which makes it another array that contains what's in slice, which happens to contain the same things in the first array. In this way we can concatenate another array onto the end. We've taken the elements of Jim, up to and not including "All Cities". Otherwise it would be Jim.concat(["Chicago", "Madison", "Tokyo"]). Concat is a property of Jim array now. I'm reassigning the array again to jim, because the slice made it a new array. 
jim = jim.slice(0, 2).concat(["Chicago", "Madison", "Tokyo"]);
//Yell at the Ninja Turtles

// Create array with mebers of turtles

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// use a for loop to call .toUpperCase()

for (let i = 0; i < turtles.length; i++) {
  console.log(turtles[i].toUpperCase())
}


const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Move kristin's shoe to thom's accessory drawer. Slice generates a new array, splice mutates it. 

let kristynsShoe = kristynsCloset.shift();
// put it in thom's accessories array
thomsCloset[2].push(kristynsShoe);

//make three separate outfits for each person, I hope I am doing this right, because I am not sure what code I am supposed to modify?

console.log(`Today Kristyn is wearing ${kristynsCloset[1]}, a ${kristynsCloset[3]}, and a ${kristynsCloset[5]}`);
console.log(`Today Kristyn is wearing ${kristynsCloset[1]}, a ${kristynsCloset[3]}, and a ${kristynsCloset[5]}`);
console.log(`Today Kristyn is wearing ${kristynsCloset[1]}, a ${kristynsCloset[3]}, and a ${kristynsCloset[5]}`);


console.log(`Today Thom is wearing ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][2]}`);
console.log(`Today Thom is wearing ${thomsCloset[0][2]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][2]}`);
console.log(`Today Thom is wearing ${thomsCloset[0][3]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][2]}`);

//Dirty Laundry

//Loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in array

for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

//Thom's inventory, log the arrays, not the elements
//I don't understand how to eliminate the listing of the elements without turning the array into the clothing items being properties (grey shirt) of an object (shirts)
for (let i = 0; i < thomsCloset.length; i++) {
  console.log(thomsCloset[i])
}


// Multiples of 3 and 5 
//declaring variable to add number to, so it's not undefined or NaN. Making the array too to pass the numbers into.
let arrayAdd = [];
let sum = 0;

for (let i = 1; i < 1000; i++) {
  // multiples of 3 or 5
  if (i % 3 === 0 || i % 5 === 0) {
  arrayAdd[sum] = i;
  sum++;
  //The array gets the iteration number into it as defined by the if loop, which is equal to i, the iteration. 
  }  
}
console.log(sum);