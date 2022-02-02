/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let wordsAndSpaces = s.split(' ');
  let words = [];
  for (i = 0; i < wordsAndSpaces.length; i++){
    if (wordsAndSpaces[i] !== ''){
      words.push(wordsAndSpaces[i])
    }
    
  }
  return words[words.length-1].length
};