//152
// Just a comment
/* Multiline comment*/
//153

// Example
var ourName;

// Define myName below this line
var myName;

// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;

// Example
var ourVar = 19;

// Only change code below this line
var a =9;

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;


// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var sum = 10 + 10;

var difference = 45 - 33;

var product = 8 * 10;

var quotient = 66 / 33;

var myVar = 87;

// Only change code below this line
myVar++;

var myVar = 11;

// Only change code below this line
myVar--;

var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7;

var product = 2.0 * 2.5;

var quotient = 4.4 / 2.0;

// Only change code below this line

var remainder = 11 % 3;

var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -= 15;
c -= 1;

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;

var a = 48;
var b = 108;
var c = 33;


// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;

function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = (celsius * (9/5)) + 32;

  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);

// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line
var myFirstName = "Elizabeth";
var myLastName = "Green";

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

var myStr = "FirstLine\n\\SecondLine\\\rThirdLine"; // Change this line

// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end.";

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";
// Only change code below this line

var myStr = "This is the first sentence.";
myStr += " This is the second sentence.";

// Example
var ourName = "Free Code Camp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Jack";
var myStr = "I am " + myName + ", a good programmer.";

// Example
var anAdjective = "awesome!";
var ourStr = "Free Code Camp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "good";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
// Setup
var myStr = "Jello World";

// Only change code below this line

var newStr = myStr.slice(1);

myStr = 'H' + newStr;

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length- 2];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
     result += "My " + myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb + ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Bill", 14];

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [[2, "house"], ["dog", "cat"]];

// Example
var ourArray = [1,2,3];
var ourData = ourArray[0]; // equals 1

// Setup
var myArray = [1,2,3];

// Only change code below this line.
var myData;
myData = myArray[0];

// Example
var ourArray = [1,2,3];
ourArray[1] = 3; // ourArray now equals [1,3,3].

// Setup
var myArray = [1,2,3];

// Only change code below this line.
myArray[0] = 3;

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);

var myList = [["Sean", 59], ["Paula", 3], ["Canada", 4, "China", 4], ["Patty", 5, "John"], ["Mexico", 8]];

// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line
function reusableFunction() {
 console.log("Hi World");
}
reusableFunction();
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2);

// more exercises
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here

}
oopsGlobal = 5;
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);

  function myLocalScope() {
    'use strict';
    var myVar = 99;

   // console.log(myVar);
  }
  myLocalScope();

  // Run and check the console
  // myVar is not defined outside of myLocalScope
  //console.log(myVar);

  // Now remove the console log line to pass the test

  // Setup
  var outerWear = "T-Shirt";

  function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
  }

  myOutfit();

  // Example
  function minusSeven(num) {
    return num - 7;
  }

  // Only change code below this line
  function timesFive(num) {
    return num * 5;
  }

  // Example
  var changed = 0;

  function change(num) {
    return (num + 5) / 3;
  }

  changed = change(10);

  // Setup
  var processed = 0;

  function processArg(num) {
    return (num + 3) / 5;
  }

  // Only change code below this line
  processed = processArg(7);

  function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();  // Change this line
  }

  // Test Setup
  var testArr = [1,2,3,4,5];

  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));

  function welcomeToBooleans() {

  // Only change code below this line.

  return true; // Change this line

  // Only change code above this line.
  }

  // Example
  function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
      return "Yes, it's true";
    }
    return "No, it's false";
  }

  // Setup
  function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";


    // Only change code above this line.

  }

  // Change this value to test
  trueOrFalse(true);

  // Setup
  function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

  // Change this value to test
  testEqual(10);

  // Setup
  function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

  // Change this value to test
  testStrict(10);

  // Setup
  function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }

  // Change this value to test
  testNotEqual(10);

  // Setup
  function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val !== 17) {

    // Only Change Code Above this Line

      return "Not Equal";
    }
    return "Equal";
  }

  // Change this value to test
  testStrictNotEqual(10);

  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }

    if (val > 10) {  // Change this line
      return "Over 10";
    }

    return "10 or Under";
  }

  // Change this value to test
  testGreaterThan(10);

  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }

    if (val >= 10) {  // Change this line
      return "10 or Over";
    }

    return "9 or Under";
  }

  // Change this value to test
  testGreaterOrEqual(10);

  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }

    if (val < 55) {  // Change this line
      return "Under 55";
    }

    return "55 or Over";
  }

  // Change this value to test
  testLessThan(10);

  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }

    return "25 or More";
  }

  // Change this value to test
  testLessOrEqual(10);
  function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
      return 'Yes';
    }

    // Only change code above this line
    return "No";
  }

  // Change this value to test
  testLogicalAnd(10);

  function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
      return "Outside";
    }

    // Only change code above this line
    return "Inside";
  }

  // Change this value to test
  testLogicalOr(15);
  function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
      result = "Bigger than 5";}
    else result = "5 or Smaller";


    // Only change code above this line
    return result;
  }

  // Change this value to test
  testElse(4);

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }

  // Change this value to test
  testElseIf(7);

  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }

  // Change this value to test
  orderMyLogic(7);

  function testSize(num) {
    // Only change code below this line
    if (num < 5) {return "Tiny";}
    else if (num < 10) {return "Small";}
    else if (num < 15) {return "Medium";}
    else if (num < 20) {return "Large";}
    else {return "Huge";}
    // Only change code above this line
  }

  // Change this value to test
  testSize(7);
  function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1){
      return "Hole-in-one!";
    } else if (strokes <= par - 2){
      return "Eagle";
    } else if (strokes === par - 1) {
      return "Birdie";
    } else if (strokes === par) {
      return "Par";
    } else if (strokes === par + 1) {
      return "Bogey";
    } else if (strokes === par + 2) {
      return "Double Bogey";
    } else if (strokes >= par + 3) {
      return "Go Home!";
    }
    // Only change code above this line
  }
  // Change these values to test
  golfScore(5, 4);

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(4);

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;

    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);


function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;

    case 42:
      answer = "The Answer";
      break;

    case 1:
      answer = "There is no #1";
      break;

    case 99:
      answer = "Missed me by this much!";
      break;

    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);

function isLess(a, b) {
  // Fix this code
    return a < b;
}

// Change these values to test
isLess(10, 15);

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
  "name": "Molly",
  "legs": 4,
  "tails": 1,
  "friends": ["other", "people"]
};

// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.name = "Happy " + myDog.name
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.bark = "woof-woof";
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

// Only change code below this line.
delete myDog.tails;

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) return myObj[checkProp]; // If true return the prop

  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  // Add record here
    {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  }

];

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i ++) {
  total += myArr[i];
}

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i ++) {
    for (var j = 0; j < arr[i].length; j ++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

// Setup
var myArray = [];

// Only change code below this line.

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
// Setup

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;


// Only change code below this line.
var testString = "This is a story of compuetr that Sam and Ham wrote while they were learning hardware and software";
var expression = /and/gi;  // Change this Line

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).leng

// Setup
var testString = "There are 3 cats but 4 dogs.";

// Only change code below this line.

var expression = /\d+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;

// Setup
var testString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expression = /\s+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length

// Setup
var testString = "How many non-space characters are there in this sentence?";

// Only change code below this line.

var expression = /\S/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

  // Only change code below this line.
  var motorBike = {
  "wheels":2,
  "engines":1,
  "seats":2

};

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var myCar = new Car();
myCar.nickname = "Lambo";

var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar = new Car(3, 1, 2);

var oldArray = [1,2,3,4,5];

// Only change code below this line.
var addThree = oldArray.map(function(val){
  return val + 3;
});
var newArray = addThree;
console.log(addThree);
console.log(oldArray);
var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array.reduce(function(total, val) {

  return total + val;
});

console.log(singleVal);

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val){
  return val < 6;
});

console.log(newArray);

var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a,b){
  return b - a;
});

console.log(array);

var array = [1,2,3,4,5,6,7];
var newArray = [];

// Only change code below this line.

newArray = array.reverse();
console.log(newArray);

var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

// Only change code below this line.

newArray = oldArray.concat(concatMe);
console.log(newArray);

var string = "Split me into an array";
var array = [];
// Only change code below this line.

array = string.split(" ");

console.log(array);
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

// Only change code below this line.

joinedString = joinMe.join(" ");
console.log(joinedString);
if 9 > 4
  print "this is being printed because 9 is greater than 4!"
end
