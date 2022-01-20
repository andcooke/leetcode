/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let resCounter = 0
    let lCounter = 0
    let rCounter = 0
    
    for (i = 0; i < s.length; i++){
     
        if (s[i] === 'L'){
            lCounter++
        }
        if (s[i] === 'R'){
            rCounter++
        }
        if (lCounter === rCounter){
            resCounter++
        }
    }
 
    return (resCounter)
    };