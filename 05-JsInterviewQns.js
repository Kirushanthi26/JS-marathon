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

//Q2 