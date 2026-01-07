// Q14 - Shuffle Function
const shuffleItems = (items) => {
    return items.map((item) => ({sort: Math.random(), value: item}))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => (a.value))
}

console.log(shuffleItems([1,2]))
//--------------------------------------------------------------------------------------

//Q15 - Find the Number of Occurrences of Minimum Value in List
const arr = [1, 2, 3, 1, 1]
const minValue = Math.min(...arr)
const minArr = arr.filter((el) => el === minValue)
console.log(minArr.length)

/**
 arr = closed box of numbers
...arr = open the box and place numbers on the table
 */

//--------------------------------------------------------------------------------------

//Q15 - Write a function which counts vowels in a string
//reduce() is used to combine all values in an array into ONE value.
//accumulator - The result so far
//currentValue - Current item from the array
//initialValue - Starting value

const findingVowels = (str) => {
    const vowels = [ 'a', 'e', 'i', 'o', 'u']

    return str.toLowerCase().split("").reduce((acc, char) =>{
        return vowels.includes(char) ? acc + 1 : acc
    }, 0)
}

console.log(findingVowels("apple"))

//--------------------------------------------------------------------------------------

//Q16 - Write a function to convert a string to title case
const capitalize = (str) => {

    const sent = []
    for (const element of str.toLowerCase().split(" ")) {
        sent.push(element[0].toUpperCase() + element.slice(1))
    }

    return sent.join(" ")
}

console.log(capitalize("short and Stout"))

//--------------------------------------------------------------------------------------