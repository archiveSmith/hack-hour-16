function balancedParens(input) {
    let checkMe = input.split('');
    let count = 0;

    checkMe.forEach(x => {
        if (x === '(' || x === '[' || x === '{') count += 1;
        else if (x === ')' || x === ']' || x === '}') count -= 1;
    });

    return count === 0;
}

module.exports = balancedParens;