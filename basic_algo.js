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
