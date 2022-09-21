/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let value;
    let result = 0;
    switch (ruleKey) {
        case "type": value = 0; break;
        case "color": value = 1; break;
        case "name": value = 2; break;
    }
    
    for (let i = 0; i < items.length; i++) {
        if (items[i][value] === ruleValue) {
            result++;
        }
    }
  return result;  
};