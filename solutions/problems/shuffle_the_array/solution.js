/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

var result = []
var counter = 0

while (counter < n){
var x = nums[counter]
var y = nums[counter + n]
    result.push(x, y)
    counter++

}
    return result
};