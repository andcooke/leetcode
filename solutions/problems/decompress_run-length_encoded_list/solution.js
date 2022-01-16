/**
 * @param {number[]} nums
 * @return {number[]}
 
 o - decompressed array 
 i - array where every odd digit says how many of the following even digit there are
 c -
 e - 
 */


var decompressRLElist = function(nums) {

    let res = []
   
    for (i = 0; i < nums.length; i+=2){
    
        let counter = 1 
        
        while (counter <= nums[i]){
            res.push(nums[i+1])
            counter++
        }
    }
    return res
};