const expression = '8/3';

const evaluate = (input) => {
    let solution = 0;
    switch(input.charAt(1)){
        case '+':
            solution = parseInt(input.charAt(0)) + parseInt(input.charAt(2))
            break
        case '-':
            solution = parseInt(input.charAt(0)) - parseInt(input.charAt(2))
            break
        case '*':
            solution = parseInt(input.charAt(0)) * parseInt(input.charAt(2))
            break
        case '/':
            solution = Math.floor(parseInt(input.charAt(0)) / parseInt(input.charAt(2)))
            break
        default:
            return 'invalid input'
        
    }
    return solution.toString()
}
let operation = evaluate(expression);
console.log(`${operation}`) 

module.exports = {evaluate}