import {library} from "./library.js";

// Global to store current category
let category = "";

// globals for the English and Japanese words that get updated when the "next" button is clicked
let englishWord = "";
let romajiWord = "";
let kanaWord = "";
let kanjiWord = "";


// Define elements
const englishTextEl = document.querySelector("#english-text");
const japaneseTextEl = document.querySelector("#japanese-text");
const showButtonEl = document.querySelector("#show-button");
const nextButtonEl = document.querySelector("#next-button");
const categoryEl = document.querySelector("#category");


// Function that creates a timestamp to pass as an argument to generateTime
const generateTimestamp = () => {

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
    
    // return the formatted timestamp 
    let timeStamp = (timestampHours+":"+timestampMinutes);

    return timeStamp;
}

// generateTime function
const convertTime = (timestamp) => {
    
    // Define arrays to store Japanese number values
    const hours = ["ichi", "ni", "san", "yo", "go", "roku", "shichi", "hachi", "ku", "juu", "juu-ichi", "juu-ni"];
    const tens = ["ichi", "ni", "san", "yon", "go"];
    const minutes = ["ippun", "ni-fun", "san-pun", "yon-pun", "go-fun", "roppun", "nana-fun", "happun", "kyuu-fun"];
    
    // Split time into hh and mm components
    let timeArray = (""+timestamp).split(":");
    
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
    return outputArray;
};

const generateNumber = () => {
    // Generate random number
    let randomNumber = Math.floor(Math.random() * 99999) + 1;
    return randomNumber;
}

// Generate a random number
const convertNumber = (number) => {

    // Define base numbers for ones, tens, hundreds, thousands, and ten-thousands places

    const baseNumbers = ["ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyuu"];

    const numbersArray = [
        // Each place array will have the unique suffixes or unique words for use in a switch/case block
        ["-man"], // -man
        ["sen", "-sen", "-zen", "hassen"], // -sen
        ["hyaku", "-hyaku", "-byaku", "roppyaku", "happyaku"], // -hyaku
        ["juu", "-juu"], // -juu
        [] // ""
    ];

    // Split into an array and pass into what will become formatNumber() method as argument
    let argsArray = (""+number).split("");
    for (let i = 0; i < argsArray.length; i++) {
        argsArray[i] = parseInt(argsArray[i]);
    }

    // Reverse the array and append 0s if the length is less than 5
    argsArray.reverse();
    while (argsArray.length < 5) {
        argsArray.push(0);
    }
    // reverse again to get the order correct and place 0s in front
    argsArray.reverse();
    console.log(argsArray);

    // Iterate through argsArray and match the number with the corresponding digit in the correct place from
    // the arrays above

    // At each iteration, assign a value to a "digit" placeholder and append it to an output array
    let outputArray = [];

    for (let i = 0; i < argsArray.length; i++) {
        if (argsArray[i] == 0) {
            console.log("Nothing in the "+i+" digit...\n");
        }

        else {
            let digit = "";
            // switch case
            switch (i) {
                case 0: // ten-thousands are simple
                    digit = baseNumbers[argsArray[i]-1]+numbersArray[i][0]
                    break;
                case 1: // thousands
                    // if/else for checking unique variations in the thousands place
                    if (argsArray[i] === 3) {
                        digit = baseNumbers[argsArray[i]-1]+numbersArray[i][2];
                    }
                    else if (argsArray[i] === 1) {
                        digit = numbersArray[i][0];
                    }
                    else if (argsArray[i] === 8) {
                        digit = numbersArray[i][3];
                    }
                    else {
                        digit = baseNumbers[argsArray[i]-1]+numbersArray[i][1];
                    }
                    break;
                case 2: // hundreds
                    // if/else for checking unique variations in the hundreds place
                    if (argsArray[i] === 3) {
                        digit = baseNumbers[argsArray[i]-1]+numbersArray[i][2];
                    }
                    else if (argsArray[i] === 1) {
                        digit = numbersArray[i][0]
                    }
                    else if(argsArray[i] === 6) {
                        digit = numbersArray[i][3]
                    }
                    else if(argsArray[i] === 8) {
                        digit = numbersArray[i][4]
                    }
                    else {
                        digit = baseNumbers[argsArray[i]-1]+numbersArray[i][1];
                    }
                    break;
                case 3: // tens only has 2 variations: one for 10 and another for tens.
                    // if/else for checking whether this is 10 or a multiple in the tens place
                    if (argsArray[i] === 1) {
                        digit = numbersArray[i][0];
                    }
                    else {
                        digit = baseNumbers[argsArray[i]-1]+numbersArray[i][1];
                    }
                    break;
                case 4: // ones are again simple
                    digit = baseNumbers[argsArray[i]-1];
                    break;
                default:
                    break;
            }

            // append the digit string to outputArray
            outputArray.push(digit);
        }
    }

    // Recombine the output array
    outputArray = outputArray.join(" ");

    console.log(outputArray);
    return outputArray;
};

// Generate a random word from the library array
const generateWord = () => {
    let subArrayIndex = Math.floor(Math.random() * library.length);
    // Store the first element of the sub-array (category) for later use
    console.log("subArray Index: "+subArrayIndex);

    let category = library[subArrayIndex][0];

    // Select a random word from the subArray
    let randomWordIndex = Math.floor(Math.random() * (library[subArrayIndex].length - 1)) + 1;
    console.log("subArray word index: "+randomWordIndex);
    let word = library[subArrayIndex][randomWordIndex];
    console.log("Word: "+word.englishText);

    let wordEnglish = word.englishText;
    let wordKana = word.kanaText;
    let wordKanji = word.kanjiText;
    let wordRomaji = word.romaji;

}

// Flags to change styling and remove the start button once beginning a quiz


// Create listeners/handlers
document.addEventListener("click", (event) => {

    // Event handlers for words
    if (event.target.getAttribute("id") === "words-button") {
        // Set category to "words"
        category = "words";

        // Clear any previously-displayed word and append a new start button

        // TODO: Display sub-categories

        // Highlight the start button and the "words" button

    }
    else if (event.target.getAttribute("id") === "time-button") {
        // Set category to "time"
        category = "time";
    }
    else if (event.target.getAttribute("id") === "numbers-button") {
        // Set category to "numbers"
        category = "numbers";
    }

    // Event handler for the start button
    else if (event.target.getAttribute("id") === "start-button") {
        // Remove the start button

    }
});

// Show button listener and handler
document.addEventListener("click", (event) => {
    // Show button handler
    if (event.target.getAttribute("id") === "show-button") {

        // Evaluate the category and run the proper conversion function
        if (category === "time") {
            japaneseTextEl.textContent = convertTime(englishWord);
        }
        else {
            console.log("Showing Japanese Translation...");
            japaneseTextEl.textContent = convertNumber(englishWord);
        }
    }  
});

// Next button listener and handler
document.addEventListener("click", (event) => {
    if (event.target.getAttribute("id") === "next-button") {
        // Conditionally determine what the next and show buttons reference
        if (category === "words") {

        }
        else if (category === "numbers") {
            let number = generateNumber();
            englishWord = number;
            englishTextEl.textContent = englishWord;
            japaneseTextEl.textContent = "";
        }
        else if (category === "time") {
            let time = generateTimestamp();
            englishWord = time;
            englishTextEl.textContent = englishWord;
            japaneseTextEl.textContent = "";
        }
    }
});

generateWord();
console.log();
