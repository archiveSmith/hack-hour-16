/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
<<<<<<< HEAD
    let nDictionary = {
        1 : 'I',
        4 : 'IV',
        5 : 'V',
        9 : 'IX',
        10 : 'X',
        40 : 'XL',
        50 : 'L',
        90 : 'XC',
        100 : 'C',
        400 : 'CD',
        500 : 'D',
        900 : 'CM',
        1000 : 'M',
    }
    const romanIndex = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let modulus = 0;
    let times = 0
    let string = '';
    for (let i = 0; i < romanIndex.length; i++){
        modulus = n%romanIndex[i]
        times = Math.floor(n/romanIndex[i])
        n = modulus
            if (times > 0) {
              for (let j = 0; j < times; j++){
                string += nDictionary[romanIndex[i]]
        
              }
            }
    }
=======

>>>>>>> cb07cf3cf9fd7c9a7732dbc4870cdd944f8f687f
}

module.exports = romanNumeral;
