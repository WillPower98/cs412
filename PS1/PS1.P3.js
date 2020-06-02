const str = 'supercalifragilisticexpialidocious';

const functionA = (functionB, str) => {
    return functionB(str);
}
const lambda1 = (str) => {
    let stuffed = ""
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == 'c'){
            stuffed += '*c'
        }
        else{
            stuffed+=str.charAt(i)
        }
    }
    const result = stuffed.split('*')
    return result
}

const lambda2 = (str) => {
    let newWord = '';
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == 'a'){
            newWord += 'A';
        }
        else{
            newWord += str.charAt(i);
        }
    }
    return newWord;
}

const countA = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == 'A'){
            count++;
        }
    }

    return count;
}


console.log(`originalString: ${str}`);
console.log(`parsed string: ${functionA(lambda1, str)}`)
let modified = functionA(lambda2, str)
console.log(`modifiedString: ${modified}`);
console.log(`numberReplaced: ${countA(modified)}`);
console.log(`length: ${modified.length}`);

module.exports = {functionA, lambda1, lambda2, countA}