// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

// Create a Date object and display the current date in the format "Today is MM/DD/YYYY"
var date = new Date();

var dateMessage =
  "Today is " +
  (date.getMonth() + 1) +
  "/" +
  date.getDate() +
  "/" +
  date.getFullYear();

document.getElementById("dateOutput").textContent = dateMessage;
console.log(dateMessage);

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

// Create the variables for number conversion
const numericStringOne = "67";
const numericStringTwo = "89";
const decimalString = "120.50";
const nonNumericString = "hello, this is not a number.";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// Convert the values using Number()
const convertedNumberOne = Number(numericStringOne);
const convertedNumberTwo = Number(numericStringTwo);
const convertedDecimal = Number(decimalString);
const convertedNonNumeric = Number(nonNumericString);
// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer

// Create sentences showing the original value, converted value, whether it is NaN, and whether it is an integer
const sentenceOne =
  "Original: '" +
  numericStringOne +
  "' -> Converted: " +
  convertedNumberOne +
  " -> isNaN: " +
  Number.isNaN(convertedNumberOne) +
  " -> isInteger: " +
  Number.isInteger(convertedNumberOne);
const sentenceTwo =
  "Original: '" +
  numericStringTwo +
  "' -> Converted: " +
  convertedNumberTwo +
  " -> isNaN: " +
  Number.isNaN(convertedNumberTwo) +
  " -> isInteger: " +
  Number.isInteger(convertedNumberTwo);
const sentenceDecimal =
  "Original: '" +
  decimalString +
  "' -> Converted: " +
  convertedDecimal +
  " -> isNaN: " +
  Number.isNaN(convertedDecimal) +
  " -> isInteger: " +
  Number.isInteger(convertedDecimal);
const sentenceNonNumeric =
  "Original: '" +
  nonNumericString +
  "' -> Converted: " +
  convertedNonNumeric +
  " -> isNaN: " +
  Number.isNaN(convertedNonNumeric) +
  " -> isInteger: " +
  Number.isInteger(convertedNonNumeric);

//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// Combine all sentences into one string
const numberConversionMessage =
  sentenceOne +
  "<br>" +
  sentenceTwo +
  "<br>" +
  sentenceDecimal +
  "<br>" +
  sentenceNonNumeric;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

// Display the final result inside the element with id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML =
  numberConversionMessage;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables

const itemPrice = 29.99;
const salesTax = 2.4;
const discount = 5;
const totalBeforeDiscount = itemPrice + salesTax;
const finalTotal = totalBeforeDiscount - discount;

// 3. Use at least ONE of the following:

// toFixed() formats each amount to two decimal places.
const mathMessage =
  "Item Price: " +
  itemPrice.toFixed(2) +
  "<br>" +
  "Sales Tax: " +
  salesTax.toFixed(2) +
  "<br>" +
  "Total Before Discount: " +
  totalBeforeDiscount.toFixed(2) +
  "<br>" +
  "Discount: " +
  discount.toFixed(2) +
  "<br>" +
  "Final Total: " +
  finalTotal.toFixed(2);
"<br><br>Addition: $" +
  itemPrice.toFixed(2) +
  " + $" +
  salesTax.toFixed(2) +
  " = $" +
  totalBeforeDiscount.toFixed(2) +
  "<br>Subtraction: $" +
  totalBeforeDiscount.toFixed(2) +
  " - $" +
  discount.toFixed(2) +
  " = $" +
  finalTotal.toFixed(2);

// Display the math results inside the element with id="mathOutput"
const mathElement = document.getElementById("mathOutput");
mathElement.innerHTML = mathMessage;
mathElement.style.whiteSpace = "pre-line";
// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// Use if/else statements to describe the conversion and calculation results.
const conditionalMessages = [];

if (Number.isNaN(convertedNonNumeric)) {
  conditionalMessages.push(
    `'${nonNumericString}' cannot be converted to a number.`,
  );
} else {
  conditionalMessages.push(
    `'${nonNumericString}' converts to ${convertedNonNumeric}.`,
  );
}

if (Number.isInteger(convertedDecimal)) {
  conditionalMessages.push(`${decimalString} converts to an integer.`);
} else {
  conditionalMessages.push(
    `${decimalString} converts to a decimal, not an integer.`,
  );
}

if (finalTotal > 25) {
  conditionalMessages.push(
    `The final total of $${finalTotal.toFixed(2)} is greater than $25.00.`,
  );
} else {
  conditionalMessages.push(
    `The final total of $${finalTotal.toFixed(2)} is $25.00 or less.`,
  );
}

const conditionalElement = document.getElementById("conditionalOutput");
conditionalElement.style.whiteSpace = "pre-line";
conditionalElement.textContent = conditionalMessages.join("\n");
