/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordSplit = s.split(" ")
    const legitWords = []
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] !== '') {
            legitWords.push(wordSplit[i])
        }
    }
 
    const lastWordIndex = legitWords.length - 1
    const letterSplit = legitWords[lastWordIndex].split("").length
    // console.log(letterSplit)
    return letterSplit
};