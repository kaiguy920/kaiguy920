/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(a) {
    const occurenceCount = {}
    for (const num of a) {
        occurenceCount[num] = (occurenceCount[num] || 0) + 1
    }
  
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    return (getKeyByValue(occurenceCount, 1))
};