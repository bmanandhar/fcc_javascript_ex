/*
//#231
function reverseString(str) {
  var strReverse = str.split('').reverse().join('');
  return strReverse;
}
reverseString("hello");
//#232
function factorialize(num) {
  var factorial = 1;
  for (var n = 2; n <= num; n ++)
    factorial *= n;
  return factorial;
}

factorialize(5);
// Palindrome

function palindrome(str) {
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseStr;
}
palindrome("My age is 0, 0 si ega ym.");
//Longest length strinh

function findLongestWord(str) {

  var splitWord = [];
  var longest = 0;

  splitWord = str.split(" ");

  for (i = 0; i < splitWord.length; i++) {
    if (splitWord[i].length > longest) {
      longest = splitWord[i].length;
    }
  }

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
//#

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
*/
// Find the greates playerNumber

var x = [[3, 5, 11, -1],[0, 1, 9, 3]];
var greatest = x[0];
for (var i = 1; i < x.length; i ++) {
    if (x[i] > greatest) {
        greatest = x[i];
    }
}
console.log("greatest number:", greatest);
