/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [];
  let counter = 1;
  while (counter <= n){
    if (counter % 3 === 0 && counter % 5 !== 0){
      result.push('Fizz');
    }
    if (counter % 5 === 0 && counter % 3 !== 0){
      result.push('Buzz');
    }
    if (counter % 5 === 0 && counter % 3 === 0){
      result.push('FizzBuzz');
    }
    if (counter % 5 !== 0 && counter % 3 !== 0){
    let string = '';
    string += counter;
    result.push(string);
    }
      counter++;
  }
    return result;
};