// Q14 - Shuffle Function
const shuffleItems = (items) => {
    return items.map((item) => ({sort: Math.random(), value: item}))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => (a.value))
}

console.log(shuffleItems([1,2]))
//--------------------------------------------------------------------------------------