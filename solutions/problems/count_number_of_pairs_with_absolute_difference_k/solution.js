/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;
    for (i = 0; i < nums.length; i++){
      for (j = 0; j < nums.length; j++){
        if (i !== j){
          if (Math.abs(nums[i] - nums[j]) === k){
            count++;            
          }
        }
      }
    }
  return (count / 2);
};