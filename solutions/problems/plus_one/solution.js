/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     if (digits[digits.length - 1] !== 9){
    digits[digits.length-1]++
    return digits
  }
  let reverseNumber = digits.reverse()
  let ending9s = []
  for (i = 0; i < reverseNumber.length; i++){
    if (reverseNumber[i] === 9){
      reverseNumber[i] = 0
      if (reverseNumber[i + 1] === undefined){
        reverseNumber.push(0)
      }
    } else {
      reverseNumber[i]++
      break
        }
      }
  let result = reverseNumber.reverse()
  return result
};