//Q1 - fizzBuzz
var fizzBuzz = function(n) {
    const numb = []
    for (let i = 1; i <= n; i++) {
        if (i%5 == 0 && i%3 == 0) {
            numb.push("FizzBuzz")
        }else if (i%3 == 0) {
            numb.push("Fizz")
        } else if (i%5 == 0) {
            numb.push("Buzz")
        } else {
            numb.push(i)
        }

    }
    return numb
};

console.log(fizzBuzz(15))

//------------------------------------------------------

//Q2 - fibonacci series - 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
function fibonacci(n) {
  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

console.log(fibonacci(10));

//------------------------------------------------------

//Q3 - recursive solution 

//------------------------------------------------------

//Q4 - String Reversal
const strReversal = "Greetings!"
console.log(strReversal.split('').reverse().join(''))

for (const character of strReversal) {
    console.log( character)
}

//------------------------------------------------------

//Q5 - palindrome
const palindromeWord = "abba"
console.log(palindromeWord == palindromeWord.split('').reverse().join('') )

//------------------------------------------------------