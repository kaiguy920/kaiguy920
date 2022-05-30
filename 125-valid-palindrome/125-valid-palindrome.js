/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
      const remove = s.toLowerCase().replace(/\W/g, "").replace(/\_/g, "")
    // console.log(remove)
    const stringForward = remove.split("")
    const stringRev = stringForward.reverse().join("")
    // console.log(stringRev)
    // console.log(remove === stringRev)
    return remove === stringRev
};