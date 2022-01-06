/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
var test = []
        for (i = 0; i < sentences.length; i++){
        var result = sentences[i].split(' ')
    if (result.length > test.length){
        test = result
    }
    
}
    return test.length
};