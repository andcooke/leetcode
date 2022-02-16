/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length > t.length || s.length < t.length){
    return false
  }
  let test = t.split('')
   for (i = 0; i < s.length; i++){
       for (j = 0; j < test.length; j++){
           if (s[i] === test[j]){
               test.splice(j, 1)
               break
           }
       }
   } 
  if (test.length === 0){
    return true
  } else {
    return false
  }
};