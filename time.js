
// Takes a time in hh:mm format and converts to Japanese

// Define arrays to store Japanese number values
const hours = ["ichi", "ni", "san", "yo", "go", "roku", "shichi", "hachi", "ku", "juu", "juu-ichi", "juu-ni"];
const tens = ["ichi", "ni", "san", "yon", "go"];
const minutes = ["ippun", "ni-fun", "san-pun", "yon-pun", "go-fun", "roppun", "nana-fun", "happun", "kyuu-fun"];


// Generate a random timestamp
let timestampHours = Math.floor(Math.random() * 11) + 1;
let timestampMinutes = Math.floor(Math.random() * 61);

// Account for single-digit random numbers by adding a 0
if (timestampHours < 10) {
    timestampHours = ("0"+timestampHours);
}
if (timestampMinutes < 10) {
    timestampMinutes = ("0"+timestampMinutes);
}

// Generate test time
// let testTime = "10:48";
let testTime = (timestampHours+":"+timestampMinutes);

console.log("\ntestTime: "+testTime);

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
    console.log("mm: "+mm);
    console.log("mm[0]: "+mm[0])
    if (mm[0] === "1") {
        finalMinutes.push("juu")
    }
    else if (mm[0] === "0") {
        console.log("was undefined");
        finalMinutes.push("");
    }
    else {
        finalMinutes.push(tens[mm[0]-1]+"-juu");
    }

    // For ones, use the proper index from the minues constant
    finalMinutes.push(minutes[mm[1]-1]);

    // Join and format the mm section to then push to final output and return
    finalMinutes = finalMinutes.join(" ");
    outputArray.push(finalMinutes);
}

// Join hh and mm with a whitespace
outputArray = outputArray.join(" ");

console.log("\nOutput: "+outputArray);