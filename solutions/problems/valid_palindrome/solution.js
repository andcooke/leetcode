/**
 * @param {string} s
 * @return {boolean}
 */
function isAlphanumeric(input){
  input = input.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let lowerCase = input.toLowerCase();
  let isLetter = false;
  for (i = 0; i < alphabet.length; i++){
    if (input === alphabet[i]){
      isLetter = true;
      return isLetter;
    } 
  }
  return false;
;}


function assertArraysEqual(array, reversedArray){
  let sameLength = array.length === reversedArray.length;
  let sameValues = true
  for (k = 0; k < array.length; k++){
    if (array[k] !== reversedArray[k]){
      sameValues = false
      break
    }
  }
  if (sameLength && sameValues){
    return true
  } else {
    return false
  }
}



function isPalindrome(s) {
  let array = []
  if (s === ''){
      return true
    }
  let lowerCase = s.toLowerCase()
  let c = lowerCase.split('')
  for (j = 0; j < c.length; j++){
    if (isAlphanumeric(c[j])){
      array.push(c[j])
    }
  }
  let copyArray = array.slice()
  let reverseArray = copyArray.reverse()
  return assertArraysEqual(array, reverseArray)
};
