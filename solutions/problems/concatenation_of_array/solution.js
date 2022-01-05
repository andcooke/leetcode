/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
   var numsA = nums.slice()
   var result = numsA.concat(nums)
    return result
};