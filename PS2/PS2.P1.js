function* gen1(){
    let [val1, val2, result] = [0, 1, 0] 
    while(true){
            result = val1 + val2;
            [val1, val2] = [val2, result]
            yield result;
    }
}

function* gen2(){
    let fibs = gen1()
    while(true){
        result = fibs.next().value
        if(result%2 == 0){
            yield result
        }
    }
}

const firsSixEvenFibs = () =>{
    let evenFibs = gen2()
    count = 0;

    while (count < 6){
        count++; 
        console.log(`F(${count}): ${evenFibs.next().value}`);
    }
}

firsSixEvenFibs()
