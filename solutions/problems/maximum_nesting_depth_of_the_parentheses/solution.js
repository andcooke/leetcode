/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let currentDepth = 0;
    let char = s.split('');
    for (i = 0; i < char.length; i++){
        if (char[i] === '('){
            currentDepth++;
            if (currentDepth > depth){
                depth = currentDepth;
            }
        }
        if (char[i] === ')'){
            currentDepth--;
        }
    }
  return depth;
};