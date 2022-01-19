/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if ( x < 0){ return false }
    
    var string = x.toString()
    var frontArray = []
    
for (i = 0; i < string.length; i++){
    frontArray.push(string[i])
}    
    var frontNumbers = frontArray.join('')

    var backward = []
for (i = 0; i < string.length; i++){
    backward.unshift(string[i])    
}
    var backNumbers = backward.join('')
    
if (frontNumbers === backNumbers){return true} 
    else {return false}
};