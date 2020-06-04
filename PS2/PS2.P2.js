function* emitter(sentence){
    const words = sentence.split(" ");
    count = words.length
    yield* words
}

const sentence = "All I know is something like a bird within her sang.";
count = 0;
const words = emitter(sentence);
let word = words.next().value

while(count --> 0){
    console.log(word)
    word = words.next().value
}

