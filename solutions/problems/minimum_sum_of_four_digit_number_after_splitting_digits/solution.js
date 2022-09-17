/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let digits = String(num).split('').sort((a,b) => a-b);
    let smallest = Number(digits[0].concat(digits[2]));
    let biggest = (Number(digits[1].concat(digits[3])) || Number(digits[1]));
    return smallest + biggest; 
};