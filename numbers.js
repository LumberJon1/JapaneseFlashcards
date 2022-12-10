// Testbed for randomizing Japanese numbers 0 - 99,999


// const generateNumber = () => {

//     // Define base numbers for ones, tens, hundreds, thousands, and ten-thousands places

//     const baseNumbers = ["ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyuu"];

//     const numbersArray = [
//         // Each place array will have the unique suffixes or unique words for use in a switch/case block
//         ["-man"], // -man
//         ["sen", "-sen", "-zen", "hassen"], // -sen
//         ["hyaku", "-hyaku", "-byaku", "roppyaku", "happyaku"], // -hyaku
//         ["juu", "-juu"], // -juu
//         [] // ""
//     ];

//     // Generate random number
//     let randomNumber = Math.floor(Math.random() * 99999) + 1;

//     // Test number
//     // let testNumber = 8621;
//     let testNumber = randomNumber;

//     // Split into an array and pass into what will become formatNumber() method as argument
//     let argsArray = (""+testNumber).split("");
//     for (let i = 0; i < argsArray.length; i++) {
//         argsArray[i] = parseInt(argsArray[i]);
//     }

//     // Reverse the array and append 0s if the length is less than 5
//     argsArray.reverse();
//     while (argsArray.length < 5) {
//         argsArray.push(0);
//     }
//     // reverse again to get the order correct and place 0s in front
//     argsArray.reverse();
//     console.log(argsArray);

//     // Iterate through argsArray and match the number with the corresponding digit in the correct place from
//     // the arrays above

//     // At each iteration, assign a value to a "digit" placeholder and append it to an output array
//     let outputArray = [];

//     for (let i = 0; i < argsArray.length; i++) {
//         if (argsArray[i] == 0) {
//             console.log("Nothing in the "+i+" digit...\n");
//         }

//         else {
//             let digit = "";
//             // switch case
//             switch (i) {
//                 case 0: // ten-thousands are simple
//                     digit = baseNumbers[argsArray[i]-1]+numbersArray[i][0]
//                     break;
//                 case 1: // thousands
//                     // if/else for checking unique variations in the thousands place
//                     if (argsArray[i] === 3) {
//                         digit = baseNumbers[argsArray[i]-1]+numbersArray[i][2];
//                     }
//                     else if (argsArray[i] === 1) {
//                         digit = numbersArray[i][0];
//                     }
//                     else if (argsArray[i] === 8) {
//                         digit = numbersArray[i][3];
//                     }
//                     else {
//                         digit = baseNumbers[argsArray[i]-1]+numbersArray[i][1];
//                     }
//                     break;
//                 case 2: // hundreds
//                     // if/else for checking unique variations in the hundreds place
//                     if (argsArray[i] === 3) {
//                         digit = baseNumbers[argsArray[i]-1]+numbersArray[i][2];
//                     }
//                     else if (argsArray[i] === 1) {
//                         digit = numbersArray[i][0]
//                     }
//                     else if(argsArray[i] === 6) {
//                         digit = numbersArray[i][3]
//                     }
//                     else if(argsArray[i] === 8) {
//                         digit = numbersArray[i][4]
//                     }
//                     else {
//                         digit = baseNumbers[argsArray[i]-1]+numbersArray[i][1];
//                     }
//                     break;
//                 case 3: // tens only has 2 variations: one for 10 and another for tens.
//                     // if/else for checking whether this is 10 or a multiple in the tens place
//                     if (argsArray[i] === 1) {
//                         digit = numbersArray[i][0];
//                     }
//                     else {
//                         digit = baseNumbers[argsArray[i]-1]+numbersArray[i][1];
//                     }
//                     break;
//                 case 4: // ones are again simple
//                     digit = baseNumbers[argsArray[i]-1];
//                     break;
//                 default:
//                     break;
//             }

//             // append the digit string to outputArray
//             outputArray.push(digit);
//         }
//     }

//     // Recombine the output array
//     outputArray = outputArray.join(" ");

//     console.log(outputArray);
//     return outputArray;
// };
