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