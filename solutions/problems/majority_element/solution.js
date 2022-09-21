/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let result = {};
    let answer = nums[0];
    let counter = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]]){
            result[nums[i]]+=1
        } else {
            result[nums[i]] = 1;
        }
    }

    for (let key in result) {
        if (result[key] > counter) {
            counter = result[key];
            answer = parseInt(key)
        } 
    }
    return answer;
};