
// Takes a time in hh:mm format and converts to Japanese

// Define arrays to store Japanese number values
const hours = ["ichi", "ni", "san", "yo", "go", "roku", "shichi", "hachi", "ku", "juu", "juu-ichi", "juu-ni"];
const tens = ["ichi", "ni", "san", "yon", "go"];
const minutes = ["ippun", "ni-fun", "san-pun", "yon-pun", "go-fun", "roppun", "nana-fun", "happun", "kyuu-fun"]; // Needs an edge case for ":10"


// Generate test time
let testTime = "11:10";

// Split time into hh and mm components
let timeArray = (""+testTime).split(":");
console.log(timeArray);
let hh = parseInt(timeArray[0]);
let mm = parseInt(timeArray[1]);

// Create the output array to hold formatted values
let outputArray = [];

// Evaluate the hh component and append "-ji"
outputArray.push(hours[hh-1]+"-ji");

// Evaluate the mm component

// Evaluate edge case where mm == 10
if (mm === 10) {
    outputArray.push("juppun");
}
else {
    // split mm into tens and ones
    // For the tens, access the numbers array at the index and add "-juu"
    

    // For ones, use switch case to add unique variants.

}

console.log("\nOutput: "+outputArray);