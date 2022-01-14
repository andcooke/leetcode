/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

    var product = 1
var sum = 0

var number = n.toString()
var digits = number.slice('')

for (i = 0; i <digits.length; i++){
    product *= digits[i]
    sum += Number(digits[i])
}

    return product - sum
};