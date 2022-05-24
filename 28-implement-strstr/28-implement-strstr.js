/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     const needle_len = needle.length;
    if (needle_len === 0) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        // substring method returns the part of the string between the start and end indexes, or to the end of the string
        const subtring = haystack.substring(i, i + needle_len)
        if (subtring === needle) {
            return i
            // console.log(i)
        }
    }
    return -1
}