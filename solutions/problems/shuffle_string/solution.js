/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 
 o - output: string that's been decoded given the indices input
 i - input: shuffled string and the decoder indices
 c - constraints: who cares
 e - edgecases:
 
 
 */

var restoreString = function(s, indices) {
    //edgecase: if indices is 1 digit, return s
    if (indices.length === 1) return s;
    
    //create a new blank array
    
    let r = []
    //iterate indices array, assigning a new location for s, at the indices value
    for (i = 0; i < indices.length; i++){
        
        //assigning a new location for s at the indices value to the blank array
        r[indices[i]]=s[i] 

    }

    return r.join('')
    
};