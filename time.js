
// Takes a time in hh:mm format and converts to Japanese

// Define arrays to store Japanese number values
const hours = ["ichi", "ni", "san", "yo", "go", "roku", "shichi", "hachi", "ku", "juu", "juu-ichi", "juu-ni"];
const tens = ["ichi", "ni", "san", "yon", "go"];
const minutes = ["ippun", "ni-fun", "san-pun", "yon-pun", "go-fun", "roppun", "nana-fun", "happun", "kyuu-fun"];


// Generate test time
let testTime = "10:48";

// Split time into hh and mm components
let timeArray = (""+testTime).split(":");

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
else if (mm === 30) {
    outputArray.push("han");
}
else {
    // Create intermediary array to hold the recombined minutes for joining in final output
    let finalMinutes = [];

    // split mm into tens and ones
    mm = (""+mm).split("");

    // For the tens, access the numbers array at the index and add "-juu"
    finalMinutes.push(tens[mm[0]-1]+"-juu");

    // For ones, use the proper index from the minues constant
    finalMinutes.push(minutes[mm[1]-1]);

    finalMinutes = finalMinutes.join(" ");
    outputArray.push(finalMinutes);
}

// Join hh and mm with a whitespace
outputArray = outputArray.join(" ");

console.log("\nOutput: "+outputArray);