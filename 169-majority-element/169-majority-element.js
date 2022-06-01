/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let count = {}
    for (const x of nums) {
        count[x] = (count[x] || 0) + 1
    }
    console.log(count)

    count = Object.keys(count).sort((a, b) => count[b] - count[a])
    return (count[0])
};