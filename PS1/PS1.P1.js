const sequence =  "supercalifragilisticexpialidocious";

const filter = (entry) => {
    const filtered = entry.match(/[a-zA-Z]+/g).join();
    newFiltered = filtered.replace(/,/g,"")
    return sortbyABC(newFiltered);
};

const sortbyABC = (str) => {
    let chars = []
    for(let i = 0; i < str.length; i ++) {
        chars.push(str.charAt(i));
    }
    return chars.sort().join("");
};


let solution = filter(sequence);
console.log(`Solution is ${solution}`)

module.exports = {filter}