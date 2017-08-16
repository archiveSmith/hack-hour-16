function matchWord(str) {
    let example = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '}', '{', '[', ']', '\\', '|', ':', ';', '<', '>', ',', '.', '`', '~', ' '];

    let lowcase = str.toLowerCase();
    let leSplit = lowcase.split('');

    let stringTest = '';
    let usCompare = [];

    leSplit.forEach((x) => {
        if (example.includes(x) === false) {
            stringTest += x;
            if (x === leSplit[leSplit.length - 1]) {
                usCompare.push(stringTest);
            }
        } else if (example.includes(x) === true && stringTest !== '') {
            usCompare.push(stringTest);
            stringTest = '';
        }
    });

    if (usCompare.length === 1) return false;

    usCompare.forEach((y) => {
        if (!usCompare.includes(y.split('').reverse().join(''))) {
            return false;
        }
    })

    return true;
}

module.exports = matchWord;