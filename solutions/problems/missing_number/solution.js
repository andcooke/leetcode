/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let amount = nums.length;
    let testArray = [];
    let counter = 0;
    while (counter <= amount){
        testArray.push(counter);
        counter++;
    }
    for (i = 0; i < nums.length; i++){
        for (j = 0; j < testArray.length; j++){
            if (nums[i] === testArray[j]){
                testArray.splice(j,1);
            }
        }
    }
    return testArray[0];
};