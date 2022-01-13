/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var smallest = []
    

    for (i = 0; i <nums.length; i++){
        var numbers = 0
        for (j = 0; j < nums.length; j++){
            if (nums[i]>nums[j]){
                numbers++
                }
            }
        smallest.push(numbers)
        }
  return smallest
    }
   
