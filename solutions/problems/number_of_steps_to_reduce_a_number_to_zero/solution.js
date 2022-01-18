/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    //make a counter variable that shows how many steps you do
    let counter = 0
    
    //make a while loop that continues while number is greater than 0
    while (num > 0){
        
    //if number is even divide by 2
        if (num % 2 === 0){
            num = num / 2 
    //add 1 to the counter
            counter ++
        }
    //if odd subract 1 
        if (num % 2 === 1){
            num = num - 1
    //add 1 to the counter
            counter++
        }
    }
    
    // return counter
    return counter
    
};