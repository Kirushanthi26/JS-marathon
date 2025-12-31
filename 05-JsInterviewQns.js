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

//Q6 - reverse Int 

const reverseInt = -15

const reversed = parseInt(Math.abs(reverseInt).toString().split('').reverse().join(''))

console.log(reversed * Math.sign(reverseInt))

//------------------------------------------------------
//Q7 - Max Char

const maxChar = "apple1223cccccccd"
const chars ={}

for (const char of maxChar) {
    if (!chars[char]) {
        chars[char] = 1 //{ a: 1 }
    } else {
        chars[char]++;
    }
}

 console.log(chars)
 
 let maxCount = 0;
 let highChar = null;
 for(const key in chars){
    console.log(chars[key])

    if (chars[key] > maxCount) {
        maxCount = chars[key]
        highChar = key
    }
 }

 console.log(highChar)

//------------------------------------------------------
//Q8 - Anagram

const anagram = (str1, str2) => {
    if(str1.length !== str2.length) return false

    const lowcaseStr1 = str1.toLowerCase()
    const lowcaseStr2 = str2.toLowerCase()


    console.log(lowcaseStr1.split(""))
    const sortedStr1 = lowcaseStr1.split("").sort().join("")
    const sortedStr2 = lowcaseStr2.split("").sort().join("")

    return sortedStr1 == sortedStr2
}


console.log(anagram('foo', 'ooF'))
//------------------------------------------------------
//Q9 - 