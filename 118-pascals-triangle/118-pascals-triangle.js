/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
     const pascalsTriangles = [];
    if (numRows === 0) {
        return pascalsTriangles;
    }

    pascalsTriangles.push([1]);
    let last = [];
    while (pascalsTriangles.length < numRows) {
        let newEntry = [];
        newEntry[0] = 1;


        for (let i = 0; i < last.length - 1; i++) {
            newEntry[i + 1] = last[i] + last[i + 1];
        }
        newEntry.push(1);
        pascalsTriangles.push(newEntry);
        last = newEntry;
    }
    // console.log(pascalsTriangles)
    return pascalsTriangles;
};