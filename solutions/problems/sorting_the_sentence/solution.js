/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  let words = s.split(' ');
  let sentenceArray = [];
  let counter = 1

  while (counter <= words.length){
     for (i = 0; i < words.length; i++){
       let order = Number(words[i][words[i].length - 1]);
         if (order === counter){
           let characters = words[i].split('');
           characters.pop();
           let word = characters.join('')
           sentenceArray.push(word)
         }
     }
    counter++;
  }
  let res = sentenceArray.join(' ');
  return res 
};