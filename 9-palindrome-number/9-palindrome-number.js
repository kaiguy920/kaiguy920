/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //  given an input, x we need to determine if it is the same backward as it is forward
    //  first we need to split x into each number value
    let digits = x.toString().split('');
    let realDigits = digits.map(Number)
    console.log(realDigits)
    let xX = realDigits.join("")
    console.log(xX)

    //  then, we need to reverse the order of the array
    const xRev = realDigits.reverse()
    const xRevJoin = xRev.join("")
    console.log(xRevJoin)
    // then compare, if same, then isPalindrome, otherwise false
    if (xX === xRevJoin) {

        return true
    }
    else {
        return false
    }

};
isPalindrome(121)