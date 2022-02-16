/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroes = 0;
  for (i = 0; i < nums.length; i++){
    while (nums[i] === 0){
      zeroes++
      nums.splice(i, 1); 
     }
  }
  let counter = 0;
  while (counter < zeroes){
    nums.splice(nums.length, 0, 0);
      counter++;
    }
  return nums;
};