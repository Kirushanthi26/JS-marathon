//------------------------------------------------------
//Q11 - Capitalize

const capitalize = (words) => {
    const joinSentence = []
    for (const word of words.split(" ")) {
        if (word) {
            joinSentence.push(word[0].toUpperCase() + word.slice(1))
        }
    }

    return joinSentence.join(' ')
}

console.log(capitalize("a short sentence"))


//------------------------------------------------------
//Q12 -Finding vowels

const findingVowels = (str) => {
     const vowels = [ 'a', 'e', 'i', 'o', 'u']

     return str.toLowerCase().split("").reduce((acc, curr) => {
        return vowels.includes(curr) ? acc + 1 : acc
     }, 0)
}

console.log(findingVowels("apple"))