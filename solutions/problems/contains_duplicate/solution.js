/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (i = 0; i < nums.length; i++){
      let count = 0;
      for (j = 0; j < nums.length; j++){
        let currentNumber = nums[i];
        if (currentNumber === nums[j]){
          count++;
        }
        if (count >= 2){
            return true;
        }
      }  
    }
  return false
};