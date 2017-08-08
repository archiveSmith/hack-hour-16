/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
    //take input and change it into an Array
    //set has bothParens to false;
    //set count =0;
    var options = ["{", "(", "["]
    var countofcurly = 0;
    var countofcurly2 = 0;
    var countofparens = 0;
    var countofparens2 = 0;
    var countofbracket = 0;
    var countofbracket2 = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] === "{" || input[i] === "[" || input[i] === "(") {

            if (input.includes("{")) {
                var pos = input.indexOf('{');
                while (pos !== -1) {
                    countofcurly++
                    pos = input.indexOf("{", pos + 1);
                }
                console.log(countofcurly)
                var pos2 = input.indexOf("}");
                while (pos2 !== -1) {
                    countofcurly2++
                    pos2 = input.indexOf("}", pos2 + 1)
                }
                console.log(countofcurly2)

                if (countofcurly === countofcurly2) return true; else return false;
            }

            if (input.includes("(")) {
                var pos = input.indexOf('(');
                while (pos !== -1) {
                    countofparens++
                    pos = input.indexOf("(", pos + 1);
                }
                var pos2 = input.indexOf(")");
                while (pos2 !== -1) {
                    countofparens2++
                    pos2 = input.indexOf(")", pos2 + 1)
                }

                if (countofparens === countofparens2) return true; else return false;
            }

            if (input.includes("[")) {
                var pos = input.indexOf('[');
                while (pos !== -1) {
                    countofbracket++
                    pos = input.indexOf("[", pos + 1);
                }

                var pos2 = input.indexOf("]");
                while (pos2 !== -1) {
                    countofbracket2++
                    pos2 = input.indexOf("]", pos2 + 1)
                }


                if (countofbracket === countofbracket2) return true; else return false;
            }



        }


        if (input[i] === "}" || input[i] === "]" || input[i] === ")") {
            return false;
        }
    }

}


module.exports = balancedParens;
