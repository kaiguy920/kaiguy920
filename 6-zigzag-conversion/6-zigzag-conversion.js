/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
        let result = []
    let step = 1, index = 0;
    for (let i = 0; i < s.length; i++) {
          if (result[index] === undefined) {
            result[index] = '';
        }
        result[index] += s[i];
        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }
    return result.join('');
    
};